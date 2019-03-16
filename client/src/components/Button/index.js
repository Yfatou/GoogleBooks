import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

export default Button;