import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import EditContactDetails from "./EditContactDetails";
import EditAwards from "./EditAwards";
import EditSkills from "./EditSkills";
import EditLanguages from "./EditLanguages";
import EditCertificates from "./EditCertificates";
import EditEducation from "./EditEducation";
function EditSectionPopup({ section, Data, setData }) {
  let id = section.id;
  const componentMap = {
    EditContactDetails,
    EditSkills,
    EditLanguages,
    EditCertificates,
    EditEducation,
    EditAwards,
  };
  useEffect(() => {
    console.log(id, "id");
  });
  return (
    <>
      {Data.map(
        (sec, index) =>
          id === sec.id && (
            <div key={index}>
              <h2>{sec.Title}</h2>
              {/* <EditContent sec={sec} Data={Data} setData={setData} /> */}
              {React.createElement(componentMap["Edit" + sec.component], {
                sec,
                Data,
                setData,
              })}
            </div>
          )
      )}
    </>
  );
}
export default EditSectionPopup;
