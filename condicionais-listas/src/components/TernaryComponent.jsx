const TernaryComponent = ({condition}) => {
  
  return (
    <div>
      {condition ? <p>A prop é verdadeira</p> : <p>A prop é falsa</p>}
    </div>
  );

  //quando o componente possui propriedades, é necessário passar a prop onde o componente é chamado
  //a prop no componente é chamada com chaves

}

export default TernaryComponent;