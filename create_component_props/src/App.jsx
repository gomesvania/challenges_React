import Welcome from './components/Welcome'
import Profile from './components/Profile'
import Family from './components/Family'
import Counter from './components/Counter'

import './App.css'

function App() {
  const members = [
    {name: 'Luana', age: 23, job: 'Desenvolvedora Frontend Jr'},
    {name: 'Bruno', age: 55, job: 'Tech Lead'},
    {name: 'João', age: 19, job: 'Desenvolvedor Backend Jr'},
  ]
  
  return (
    <>
      <h1>Criação de um componente com props</h1>
      <Welcome name='Maria' />

      <h1>Criação de um componente com múltiplas props</h1>
      <Profile name='Denize' age={25} job='Desenvolvedora Frontend Sr' />

      <h1>Composição de componentes</h1>
      <Family members={members} />

      {/* <h1>Composição de componentes com children</h1> */}

      <h1>Componente de Classe</h1>
      <Profile name='Claúdio' age={15} job='Pedreiro' />

      <h1>Componente com o hook de estado</h1>
      <Counter />
    </>
  )
}

export default App
