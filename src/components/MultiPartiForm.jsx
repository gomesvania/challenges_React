import React, { useState } from "react";

import "./MultiPartForm.css";

const MultiPartForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function nextStep() {
    if (step === 1 && formData.name === "") {
      alert("Please fill in the name field");
      return;
    }

    if (step === 2 && formData.email === "") {
      alert("Please fill in the email field");
      return;
    }

    setStep(step + 1);
  }

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password === "") {
      alert("Please fill in the password field");
    } else {
      console.log(formData);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        )}

        {step === 2 && (
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        )}

        {step === 3 && (
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        )}

        {step > 1 && (
          <button className="button" type="button" onClick={previousStep}>
            Back
          </button>
        )}
        {step < 3 && (
          <button className="button" type="button" onClick={nextStep}>
            Nextk
          </button>
        )}
        {step === 3 && (
          <button className="button" type="submit" onClick={() => setStep(step + 2)}>
            Send
          </button>
        )}
      </form>
    </div>
  );
};

export default MultiPartForm;
