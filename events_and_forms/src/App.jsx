import "./App.css"
import RegistrationForm from "./components/RegistrationForm";

import DynamicForm from "./components/DynamicForm";
import ValidationForm from "./components/ValidationForm";
import UploaderFile from "./components/UploaderFile";

function App() {
  return (
    <>
      <h1>Formulário de Registro</h1>
      <RegistrationForm />

      <h1>Formulário Dinâmico</h1>
      <DynamicForm />

      <h1>Validação Formulário</h1>
      <ValidationForm />

      <h1>Upload File</h1>
      <UploaderFile />
    </>
  );
}

export default App;