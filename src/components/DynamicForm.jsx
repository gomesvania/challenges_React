import { useState } from 'react';

import './DynamicForm.css';

const DynamicForm = () => {
  const [fields, setFields] = useState([""]);

  const handleChange = (event, index) => {
    const newFields = [...fields];
    newFields[index] = event.target.value;
    setFields(newFields);
  };

  const handleAdd = () => {
    const values = [...fields];
    values.push("");
    setFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  }

  return (
    <form className="form-content" onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <input
          key={index}
          type="text"
          value={field}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
      <input className="input input-send" type="submit" value="Enviar" />
      <button className="button-submit" type="button" onClick={handleAdd}>Adicionar campo</button>
    </form>
  );
};

export default DynamicForm;