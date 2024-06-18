import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import EditContactDetails from "./EditContactDetails";
import EditAwards from "./EditAwards";
import EditSkills from "./EditSkills";
import EditLanguages from "./EditLanguages";
import EditCertificates from "./EditCertificates";
import EditEducation from "./EditEducation";
import EditExperience from "./EditExperience";
function EditSectionPopup({
  section,
  ConData,
  setConData,
  editsection,
  seteditsection,
}) {
  let title = section.Title;
  const [sectionData, setsectionnData] = useState([]);
  const componentMap = {
    EditContactDetails,
    EditSkills,
    EditLanguages,
    EditCertificates,
    EditEducation,
    EditAwards,
    EditExperience,
  };
  useEffect(() => {
    // console.log(title, "tit;e");
    // console.log(ConData[title], "ConData[title]");
    setsectionnData(ConData[title]);
  });
  function handleClose() {
    seteditsection(false);
  }
  return (
    <>
      <div className="popup">
        <div className="popup-inner">
          <h2>{section.Title}</h2>
          <button className="close-btn" onClick={handleClose}>
            X
          </button>
          {React.createElement(componentMap["Edit" + section.component], {
            section,
            ConData,
            setConData,
            editsection,
            seteditsection,
          })}
        </div>
      </div>
    </>
  );
}
export default EditSectionPopup;
