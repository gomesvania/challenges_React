import './App.css'
import Clock from './components/Clock';
import ToDoList from './components/ToDoList';
import Toggle from './components/Toggle'

function App() {
  
  return (
    <>
      <h1>1 - Usando o Estado</h1>
      <Toggle />
      <h1>2 - Relógio em tempo real</h1>
      <Clock />
      <h1>ToDoList</h1>
      <ToDoList />
    </>
  );
}

export default App
