import './App.css'
import Clock from './components/Clock';
import SearchDataAPI from './components/SearchDataAPI';
import ToDoList from './components/ToDoList';
import Toggle from './components/Toggle'
import ViewScreenWidth from './components/ViewScreenWidth';

function App() {
  
  return (
    <>
      <h1>1 - Usando o Estado</h1>
      <Toggle />
      <h1>2 - Relógio em tempo real</h1>
      <Clock />
      <h1>ToDoList</h1>
      <ToDoList />
      <h1>3 - Largura da Tela</h1>
      <ViewScreenWidth />
      <h1>4 - Buscando dados da API Pokemon</h1>
      <SearchDataAPI />
    </>
  );
}

export default App
