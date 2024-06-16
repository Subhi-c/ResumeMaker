import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import EditSectionPopup from "./EditSectionPopup";

function EditContent({ section, ConData, setConData }) {
  const [editsection, seteditsection] = useState(false);
  function handleEditSection() {
    // console.log(section);
    seteditsection(true);
  }
  return (
    <>
      <button className="option" onClick={handleEditSection}>
        Edit Section
      </button>
      {editsection && (
        <EditSectionPopup
          editsection={editsection}
          seteditsection={seteditsection}
          section={section}
          ConData={ConData}
          setConData={setConData}
        />
      )}
    </>
  );
}
export default EditContent;
