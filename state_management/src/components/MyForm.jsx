import { Form, Field } from "react-final-form";

const MyForm = () => {
  const required = (value) => (value ? undefined : "Field is required");

  const mustBeNumber = (value) =>
    isNaN(value) ? "Must be a number" : undefined;

  function composeValidators(...validators) {
    return (value) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );
  }

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <Field name="firstName" validate={required}>
              {({ input, meta }) => (
                <div>
                  <input {...input} placeholder="First Name" type="text" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
          </div>
          <div>
            <label>Last Name</label>
            <Field name="lastName" validate={required}>
              {({ input, meta }) => (
                <div>
                  <input {...input} placeholder="Last Name" type="text" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
          </div>
          <div>
            <label>Email</label>
            <Field name="email" validate={required}>
              {({ input, meta }) => (
                <div>
                  <input {...input} placeholder="Email" type="email" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
          </div>
          <div>
            <label>Age</label>
            <Field
              name="age"
              validate={composeValidators(required, mustBeNumber)}
            >
              {({ input, meta }) => (
                <div>
                  <input {...input} placeholder="Your age" type="text" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
          </div>
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
            <button type="button" onClick={form.reset}>
              Reset
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default MyForm;
