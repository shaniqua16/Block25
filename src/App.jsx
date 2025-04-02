// Write your Color component here
import { useState } from "react";

const Color = ({color, setSelectedColor, selectedColor}) => {
  console.log(color);
  return (
    <div className={color} onClick={() => setSelectedColor(color)}></div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        
          
            <Color color="blue" setSelectedColor={setSelectedColor} selectedColor={setSelectedColor} />
            <Color color="black" setSelectedColor={setSelectedColor} selectedColor={setSelectedColor} />
            <Color color="green" setSelectedColor={setSelectedColor} selectedColor={setSelectedColor}/>

          
        
      </div>
    </div>
  );
};

export default App;
// const [variable, setter] = useState(null);
//   /*
//     variable && 

//     setter(3)
//   */

//   useEffect(() => {
//     console.log(variable);
//     setter((counter) => counter + 1);
//   }, [variable]);