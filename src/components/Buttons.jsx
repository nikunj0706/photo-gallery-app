import React from "react";

function Buttons({ category, setCategory }) {
  const getClassName = (buttonID) => {
    if (category === buttonID) {
      return "selected";
    }
    return "";
  };

  return (
    <div className="button-container">
      <button className={getClassName(1)} onClick={() => setCategory(1)}>
        All
      </button>
      <button className={getClassName(2)} onClick={() => setCategory(2)}>
        Branding
      </button>
      <button className={getClassName(3)} onClick={() => setCategory(3)}>
        Design
      </button>
      <button className={getClassName(4)} onClick={() => setCategory(4)}>
        Development
      </button>
    </div>
  );
}

export default Buttons;
