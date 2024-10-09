import Colorbox from "./Colorbox";
import colors from "../../data/data";

export default function ColorBoxesContainer() {
  return (
    <div className="color-boxes-container">
      {Array.from({ length: 25 }).map((_, index) => (
        <Colorbox key={index} color={colors[index % colors.length]} />
      ))}
    </div>
  );
}
