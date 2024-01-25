const SwitchCaseComponent = ({ value }) => {
  let message;

  switch (value) {
    case "1":
      message = "Valor é 1";
      break;
    case "2":
      message = "Valor é 2";
      break;
    default:
      message = "Valor não é 1 nem 2";
      break;
  }

  return <p>{message}</p>;
}

export default SwitchCaseComponent;