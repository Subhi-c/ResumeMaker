import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import EditContactDetails from "./EditContactDetails";
import EditAwards from "./EditAwards";
import EditSkills from "./EditSkills";
import EditLanguages from "./EditLanguages";
import EditCertificates from "./EditCertificates";
import EditEducation from "./EditEducation";
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
  };
  useEffect(() => {
    // console.log(title, "tit;e");
    // console.log(ConData[title], "ConData[title]");
    setsectionnData(ConData[title]);
  });
  return (
    <>
      <div>
        <h2>{section.Title}</h2>
        {React.createElement(componentMap["Edit" + section.component], {
          section,
          ConData,
          setConData,
          editsection,
          seteditsection,
        })}
      </div>
    </>
  );
}
export default EditSectionPopup;
