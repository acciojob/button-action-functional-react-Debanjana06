

import React, {useState} from "react";

function App() {
  const [para,setPara] = useState(true)
  const handleClick=()=>{
    setPara(false)
  }
  return (
    <div id="main">
      // Do not alter the main div
    {para ? (<button id="click" onClick={handleClick}>
      click me
    </button>):(<p id="para">
    Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
    </p>)}
    </div>
  );
}


export default App;
