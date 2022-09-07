import React, { EventHandler, SyntheticEvent, useRef, useState } from "react";
import styles from "../styles/DarkMode.module.css";
import { useEffect } from "react";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("color-mode", "dark");
      localStorage.setItem("color-mode", "dark");
    } else {
      document.documentElement.setAttribute("color-mode", "light");
      localStorage.setItem("color-mode", "light");
    }
  }, [darkMode]);

  const switchMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button className={styles.mode_button} onClick={switchMode}>
      {darkMode ? (
        <i className="iconfont icon-moon"></i>
      ) : (
        <i className="iconfont icon-sun"></i>
      )}
    </button>
  );
}

export default DarkMode;
