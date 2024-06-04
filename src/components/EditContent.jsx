import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import EditSectionPopup from "./EditSectionPopup";

function EditContent({ section, Data, setData }) {
  const [editsection, seteditsection] = useState(false);
  function handleEditSection() {
    console.log(section);
    seteditsection(true);
  }
  return (
    <>
      <button onClick={handleEditSection}>Edit Section</button>
      {editsection && (
        <EditSectionPopup section={section} Data={Data} setData={setData} />
      )}
    </>
  );
}
export default EditContent;
