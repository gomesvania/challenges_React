import { useState, useEffect } from "react";

import styles from "../components/Theme.module.css";

const Theme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme === "light" ? styles.themelight : styles.themedark;
  }, [theme]);

  return (
    <div className="div-button">
      <button className="button"
        onClick={() =>
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
      >
        Change Button
      </button>
    </div>
  );
};

export default Theme;
