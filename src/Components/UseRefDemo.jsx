import React, { useEffect, useRef, useState } from "react";


function UseRefDemo() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  return (
    <div className="text-center">
      <div> UseRefDemo </div>
      <input
        type="text"
        ref={count}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1> Render Count : {count.current} </h1>
    </div>
  );
}

export default UseRefDemo;
