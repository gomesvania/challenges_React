import "./App.css"
import RegistrationForm from "./components/RegistrationForm";

import DynamicForm from "./components/DynamicForm";
import ValidationForm from "./components/ValidationForm";
import UploaderFile from "./components/UploaderFile";
import MultiPartForm from "./components/MultiPartiForm";

function App() {
  return (
    <>
      <h2>Formulário de Registro</h2>
      <RegistrationForm />

      <h2>Formulário Dinâmico</h2>
      <DynamicForm />

      <h2>Validação Formulário</h2>
      <ValidationForm />

      <h2>Upload File</h2>
      <UploaderFile />

      <h2>Formulário Múltiplas Etapas</h2>
      <MultiPartForm />
    </>
  );
}

export default App;