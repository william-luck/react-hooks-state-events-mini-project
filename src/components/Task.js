import React from "react";

function Task({ text, category }) {



  function removeDiv(event) {
    event.target.parentNode.remove();
  }


  return (
    <div className="task">
      <div className="label">{category}</div> 
      <div className="text">{text}</div>
      {/* making use of the props passed down, not using key in any way here. KEEP THINGS SIMPLE */}
      <button className="delete" onClick={removeDiv}>X</button>
      {/* making use of old friend DOM manipulation, just removing the parentNode */}
      
    </div>
  );
}

export default Task;
