import { useState } from "react";

function SlidingContentForTips({ SlidingContent }) {
  console.log("SlidingContent1", SlidingContent);
  return (
    <>
      <div>
        <div>
          {SlidingContent.map((content, index) => (
            <div key={index}>
              <h1>{content.Title}</h1>
              <p>{content.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SlidingContentForTips;
