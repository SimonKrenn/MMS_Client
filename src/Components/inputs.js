import React, { useState } from "react";
const Form = () => {

  const blankInput = { x: 0, y: 0, text: "", fontSize: 0, angle: 0 }
  const [inputState, setInputState] = useState([
    {...blankInput},
  ]);


  const addInput = () => {
      setInputState([...inputState, {...blankInput}]);
  };

  const handleInputChanges = (e) => {
    const updatedInputs = [...inputState];
    updatedInputs[e.target.dataset.idx][e.target.className] = e.target.value;
    setInputState(updatedInputs);
  }

  return (
    <form>
      {inputState.map((val, idx) => {
        const xId = `x-${idx}`;
        const yId = `y-${idx}`;
        const textId = `text-${idx}`;
        const fontSizeId = `fontSize-${idx}`;
        const angleId = `angle-${idx}`;

        return (
          <div key={`text-${idx}`}>
            <label htmlFor="{textId}">{`Text #${idx + 1}`}</label>
            <input type="number" name={xId} data-idx={idx} id={xId} value={inputState[idx].x} onChange={handleInputChanges}/>
            <input type="number" name={yId} data-idx={idx} id={yId} value={inputState[idx].y} onChange={handleInputChanges}/>

            <input type="text" name={textId} data-idx={idx} id={textId} value={inputState[idx].text} onChange={handleInputChanges} />
            <input
              type="number"
              name={fontSizeId}
              data-idx={idx}
              id={fontSizeId}
              value={inputState[idx].fontSize}
              onChange={handleInputChanges}
            />
            <input type="number" name={angleId} data-idx={idx} id={angleId}  value={inputState[idx].angle} onChange={handleInputChanges} />
          </div>
        );
      })}
      <input type="button" name="Add new Text" onClick={addInput}/>
      <input type="submit" value="submit" />
    </form>
  );
};

export default Form;
