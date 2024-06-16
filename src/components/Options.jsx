import { useState } from "react";
import data from "../TipsData.json";
function Options({
  isOpen,
  setIsOpen,
  SlidingContent,
  setSlidingContent,
  userOption,
  setuserOption,
}) {
  function toggleDiv(ch) {
    setIsOpen(!isOpen);
    setuserOption(ch);
    if (ch == "T") {
      setSlidingContent(data.tips);
      // console.log(SlidingContent, "SlidingContent before");
    }
  }

  return (
    <>
      <div className="Options">
        <button className="option" onClick={() => toggleDiv("Temp")}>
          <strong>Templates</strong>
        </button>
        <button className="option" onClick={() => toggleDiv("M")}>
          Manage Section
        </button>
        <button className="option" onClick={() => toggleDiv("T")}>
          Tips
        </button>
        <button className="option">Download Resume</button>
      </div>
    </>
  );
}
export default Options;
