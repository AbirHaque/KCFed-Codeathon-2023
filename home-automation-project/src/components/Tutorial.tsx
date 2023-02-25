import React from "react";

const Tutorial = (props) => {
  const number = props.number;
  const title = props.title;
  const text = props.text;


  return (
    <div className="tutorial" >
      <h3>Tutorial {number}: {title}</h3>
      
      <h3><pre>{text}</pre></h3>
      




    </div>
  );
};

export default Tutorial;