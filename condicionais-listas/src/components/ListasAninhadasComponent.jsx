const ListasAninhadasComponent = () => {
  const list = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
  ];

  return (
    <ul>
      {list.map((sublist, index) => (
        <li key={index}>
          {sublist.map((item, subItem) => (
            <ul key={subItem}>
              <li>{item}</li>
            </ul>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default ListasAninhadasComponent;
