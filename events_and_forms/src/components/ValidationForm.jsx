import { useState } from "react";

const ValidationForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    validade(name, value);
    setValues({ ...values, [e.target.name]: e.target.value });
    setError({ ...error, [name]: validade(name, value) });
  };

  const handleResetValues = () => {
    setValues({
      name: "",
      email: "",
      password: "",
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let validadeErrors = {};
    Object.keys(values).forEach((key) => {
      const errorMessage = validade(key, values[key]);
      validadeErrors = { ...validadeErrors, [key]: errorMessage };
    });

    setError(validadeErrors);

    if (Object.values(validadeErrors).some((error) => error !== "")) {
      console.log("Formulário inválido");
      setError(validadeErrors);
    } else {
      console.log("Formulário válido", values);
    }

    handleResetValues();
  };

  const validade = (name, value) => {
    let errorMessage = "";

    switch (name) {
      case "name":
        errorMessage = value ? "" : "Nome em branco, prreencha corretamente!";
        break;

      case "email":
        if (!value.includes("@")) {
          errorMessage = "Email inválido, prreencha corretamente!";
        } else if (value.email === "") {
          errorMessage = "Email em branco, prreencha corretamente!";
        }
        // errorMessage = value ? "" : "Email em branco, prreencha corretamente!";
        break;

      case "password":
        errorMessage = value.length >= 6 ? "" : "Senha em branco e/ou deve ter ao menos 6 caracteres, prreencha corretamente!";
        break;

      default:
        break;
    }

    return errorMessage;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-content">
        <div>
          <p>Nome:</p>
          {error.name && <p>{error.name}</p>}
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Email:</p>
          {error.email && <p>{error.email}</p>}
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Senha:</p>
          {error.password && <p>{error.password}</p>}
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="button-submit" type="submit">
            Cadastrar
          </button>
        </div>
      </div>
    </form>
  );
};

export default ValidationForm;
