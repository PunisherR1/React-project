import React from "react";
import ReactDom from "react-dom";

function Test() {
  return <h4>This is a test1!</h4>;
}

ReactDom.render(<Test />, document.getElementById("root"));
