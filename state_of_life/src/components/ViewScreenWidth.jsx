import { useEffect, useState } from "react";

const ViewScreenWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Adicionado um event listener para lidar com as alterações de largura da tela
    window.addEventListener("resize", handleResize);

    // Remove o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <p>Screen Width: {width}px</p>
    </div>
  );
};

export default ViewScreenWidth;
