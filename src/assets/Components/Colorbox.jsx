import { useState } from "react";

export default function Colorbox({ color }) {
  const [currentColor, setCurrentColor] = useState(color);

  const colorClick = () => {
    setCurrentColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  };

  return (
    <div
      onClick={colorClick}
      className="color-box"
      style={{ backgroundColor: currentColor }}
    ></div>
  );
}
