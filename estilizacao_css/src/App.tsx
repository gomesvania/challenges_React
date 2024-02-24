import "./App.css";
import Button from "./components/Button";
import HelloWord from "./components/HelloWord";
import Theme from "./components/Theme";

function App() {
  return (
    <div
      style={{
        display: "block",
        textAlign: "center",
      }}
    >
      <h1>Estilização CSS</h1>
      <h2>Hello Word com estilos</h2>
      <HelloWord />
      <h2>Button com estilos externos</h2>
      <Button />
      <h2>Tema claro ou escuro</h2>
      <Theme />
    </div>
  );
}

export default App;
