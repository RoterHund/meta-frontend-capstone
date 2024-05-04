import React from "react";
//import "./Styles.css";
import { useTheme } from '../../context/ThemeContext';
import './SwitchMode.css';

const SwitchMode = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className={`switch theme-${theme}`}>
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={toggleTheme}
      />
      <span className="slider round" />
    </label>
  );
};

export default SwitchMode;