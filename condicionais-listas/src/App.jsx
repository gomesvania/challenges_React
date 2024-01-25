import TimeBasedComponent from "./components/TimeBasedComponent";
import ListasAninhadasComponent from "./components/ListasAninhadasComponent";
import SwitchCaseComponent from "./components/SwitchCaseComponent";
import TernaryComponent from "./components/TernaryComponent";
import MultiSelectionComponent from "./components/MultSelectionComponent";

function App() {
  return (
    <div>
      <h2>Redenrização de Ternário</h2>
      <TernaryComponent condition={false} />

      <h2>Redenrização com Switch</h2>
      <SwitchCaseComponent value="9" />

      <h2>Redenrização com Listas Aninhadas</h2>
      <ListasAninhadasComponent />

      <h2>Redenrização baseada no Tempo</h2>
      <TimeBasedComponent />

      <h2>Redenrização Multi Seleção</h2>
      <MultiSelectionComponent />
    </div>
  );
}

export default App;
