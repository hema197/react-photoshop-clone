import React from "react";

export default function Slider({value, min, max, handleChange}) {
  return (
    <div className="slider-container">
      <input type="range" className="slider"
      value={value}
      min={min}
      max={max}
      onChange={handleChange} />

    </div>
  );
}
