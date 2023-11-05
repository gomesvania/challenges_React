import { useState } from "react";

import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-content">
        <div>
          <p>Nome:</p>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Email:</p>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Senha:</p>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="button-submit" type="submit">Cadastrar</button>
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;
