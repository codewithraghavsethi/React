import React from "react";
import { useState } from "react";

export default function TextForm(props) {

  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = () => { 
    let newText = "";
    setText(newText);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };


  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear Page
        </button>
      </div>

      <div className="container my-3">
        <h2>Your Text Summry</h2>
        <p>
          {text.split("").length } Word and {text.length} Characters
        </p>
        <p>{0.008 * text.split("").length } Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
