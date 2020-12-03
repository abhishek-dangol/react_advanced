import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");

  return (
    <>
      <h1>{text || "john doe"}</h1>
      {text && <h1>hello world</h1>}
      {!text && <h1>hello world</h1>}
    </>
  );
};

export default ShortCircuit;
