import React, { useMemo, useState } from "react";
import'./App.css'



function App() {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);

  // when weight change from slider data also change
  const onWeightChange = (event) => {
    setWeight(event.target.value);
    console.log(weight)
  };

  // when height change from slider
  const onHeightChange = (event) => {
    setHeight(event.target.value);
    console.log(height)
  };
   
  // useMemo for optimise the app and calculation
  const output = useMemo(()=>{

  const calculateHeight = height / 100;  // for height calculate
     
     // complete calculation   toFixed(1) give (.1 output) after calculate
    return(weight/(calculateHeight*calculateHeight)).toFixed(1)
  },[weight,height])

  return (
    <main className="from-neutral-900  m-10 bg-amber-50 ">
      <h1 className="bg-blue-800 w={100} p-5 pl-25 text-3xl font-semibold ">
        Project 1 : BMI CALCULATOR
      </h1>
      <div className="input-section">
        <p className="slider-output">weight:{weight}kg</p>
        <input
          type="range"
          className="input-slider"
          step={1}
          min={40}
          max={200}
          onChange={onWeightChange}
        />
        <p className="slider-output">Height:{height}cm</p>
        <input
          type="range"
          className="input-slider"
          onChange={onHeightChange}
          min={140}
          max={200}
        />
      </div>
      <div className="output-section">
        <p>Your Bmi is</p>
        <button class="rounded-md bg-slate-800 py-2 px-4 border  text-sm text-white focus:bg-slate-700 " type="button">
  {output}
</button>

      </div>
    </main>
  );
}

export default App;
