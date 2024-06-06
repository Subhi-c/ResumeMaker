import React, { useState } from "react";
import SlidingContentForTips from "./SlidingContentForTips";
import SlidingContentForSections from "./SlidingContentForSections";
function SlidingDiv({
  isOpen,
  setIsOpen,
  SlidingContent,
  setSlidingContent,
  userOption,
  setuserOption,
  Data,
  setData,
}) {
  // console.log("SlidingConten2t", SlidingContent);
  const closeDiv = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {isOpen ? (
        <div className={`sliding-div ${isOpen ? "open" : ""}`}>
          <div className="close-btn" onClick={closeDiv}>
            X
          </div>
          {userOption === "T" ? (
            <SlidingContentForTips SlidingContent={SlidingContent} />
          ) : userOption === "M" ? (
            <SlidingContentForSections Data={Data} setData={setData} />
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SlidingDiv;
