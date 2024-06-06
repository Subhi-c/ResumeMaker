import { useEffect, useState } from "react";
import CustomSection from "./CustomSection";

function SlidingContentForSections({ Data, setData }) {
  //   const [Data, setData] = useState([]);
  const [customSection, setcustomSection] = useState(false);
  const handleToggle = (sectionId) => {
    setData((prevData) => {
      return prevData.map((section) => {
        if (section.id === sectionId) {
          return { ...section, inView: !section.inView };
        }
        return section;
      });
    });
    // console.log(Data, "Data");
  };
  function handleCustomSection() {
    setcustomSection(true);
  }
  return (
    <>
      {Data.map((section) => (
        <div key={section.id}>
          <label htmlFor={section}>{section.Title}</label>
          <div className="switch">
            <input
              checked={section.inView}
              onChange={() => handleToggle(section.id)}
              className="switch-checkbox"
              id={section.Title}
              type="checkbox"
            />
            <label className="switch-label" htmlFor={section.Title}>
              <span className="switch-button" />
            </label>
          </div>
        </div>
      ))}
      {customSection ? (
        <CustomSection
          Data={Data}
          setData={setData}
          setcustomSection={setcustomSection}
        />
      ) : (
        ""
      )}
      <div>
        <button onClick={handleCustomSection}>Add Custom Section</button>
      </div>
    </>
  );
}

export default SlidingContentForSections;
