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
      <div>
        <div>
          <button onClick={() => toggleDiv("Temp")}>Templates</button>
          <button onClick={() => toggleDiv("M")}>Manage Section</button>
          <button onClick={() => toggleDiv("T")}>Tips</button>
        </div>
        <div>
          <button>Download Resume</button>
        </div>
      </div>
    </>
  );
}
export default Options;
