import React, { useState } from "react";
// import useState

export default function Textform(props) {
  // useState use
  const [Text, setText] = useState("");

  // handleUpClick function to convert text into upper case
  const handleUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);

    if (!Text) {
      props.showAlert("Please enter text in the text area", "danger ");
    } else {
      props.showAlert("Text is convert to Upper case", "success");
    }
  };

  // handleUpClickToLowerCase to convert text to lower case

  const handleUpClickToLowerCase = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    if (!Text) {
      props.showAlert("Please enter text in the text area", "danger ");
    } else {
      props.showAlert("Text is convert to Lower case", "success");
    }
  };

  // delete text from textarea

  const handleCleare = () => {
    setText(" ");
    if (!Text) {
      props.showAlert("Text is not recover", "danger ");
    } else {
      props.showAlert("Text is Cleare", "success");
    }
  };

  // copy text

  // const handleCopy = () =>{
  //   let text = document.getElementById('myBox');
  //   text.Select();
  //   document.getSelection().removeAllRanges();
  //   navigator.clipboard.writeText(Text.value);
  // }

  // Remove Extra spaces

  const handleExtraSpace = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    if (!Text) {
      props.showAlert("Please enter text in the text area", "danger ");
    } else {
      props.showAlert("Remove Extra space", "success");
    }
  };

  // handle onChange

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="container py-4 px-4">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {props.textheading}
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={Text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="container ">
          <button   disabled={Text.length === 0}
            className="btn btn-primary   my-1  mx-2 "
            onClick={handleUpClick}
          >
            Upper Case
          </button>
{/* disabled = {Text.length ===0 }  use for the disble button whenever text is not input */}

          <button  disabled={Text.length === 0}
            className="btn btn-primary my-1  mx-2 "
            onClick={handleUpClickToLowerCase}
          >
            Lower Case
          </button>
          <button disabled={Text.length === 0}
            className="btn btn-primary  my-1  mx-2 "
            onClick={handleCleare}
          >
            Clear Text
          </button>
          <button disabled={Text.length === 0}
            className="btn btn-primary  my-1  mx-2 "
            onClick={handleExtraSpace}
          >
            Remove Extra space
          </button>
{/* 
          <button disabled={Text.length === 0}
            className="btn btn-primary  my-1  mx-2 "
            onClick={handleCopy}
          > 
            Copy Text
          </button> */}
        </div>
      </div>

      <div className="container py-4 px-4">
        <h1>Text Summery</h1>

        <p>
          {/* {Text.trim(" ").split(" ").length} Words And {Text.length} character{" "} */}
          {Text.split(" ").filter((element)=> {return element.length !== 0}).length} Words and {Text.length} Character.
        </p>
        <p>{0.008 * Text.split("").length} Minute read this Text</p>
        <h2>Text Preview</h2>
        <p>{Text.length > 0 ? Text : "Enter Some Things is Above box"}</p>
      </div>
    </>
  );
}
