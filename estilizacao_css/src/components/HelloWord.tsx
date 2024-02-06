const HelloWord = () => {

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'purple',
    backgroundColor: '#f0f0f0',
  };

  return (
    <div>
      <h1 style={style}>Hello Word</h1>
    </div>
  );
};

export default HelloWord;
