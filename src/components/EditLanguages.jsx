import { useState } from "react";
function EditLanguages({
  section,
  ConData,
  setConData,
  editsection,
  seteditsection,
}) {
  // console.log(ConData, "ConData");
  const [formData, setFormData] = useState(ConData.languages);
  const [newlanguage, setnewlanguage] = useState("");
  const [addNew, setaddNew] = useState(false);
  // console.log(formData, "form daa");
  const handleChange = (e) => {
    setnewlanguage(e.target.value);
  };
  function handleAddlanguage() {
    if (newlanguage === "") return;
    setFormData((prevFormData) => {
      const updatedFormData = [...prevFormData, newlanguage];
      setConData((prevConData) => ({
        ...prevConData,
        languages: updatedFormData,
      }));
      return updatedFormData;
    });
    setnewlanguage("");
    setaddNew(false);
  }
  function handleAddNew() {
    setaddNew(true);
  }
  function handleDeletelanguage(e) {
    let id = e.target.id;
    setFormData((prevFormData) => {
      const updatedFormData = prevFormData.filter((_, index) => index != id);
      // Update ConData with the latest formData
      setConData((prevConData) => ({
        ...prevConData,
        languages: updatedFormData,
      }));
      return updatedFormData;
    });
  }
  function handleCloseNew() {
    seteditsection(false);
  }
  return (
    <>
      <div>
        {formData.map((language, index) => (
          <div key={index}>
            <input type="text" value={language} />
            <button id={index} onClick={handleDeletelanguage}>
              X
            </button>
          </div>
        ))}
      </div>
      {addNew && (
        <div>
          <input
            type="text"
            name="newItem"
            id="newItem"
            value={newlanguage}
            onChange={handleChange}
          />
          <button onClick={handleAddlanguage}>Save</button>
        </div>
      )}
      <div>
        <button onClick={handleAddNew}>Add NEW</button>
        <button onClick={handleCloseNew}>Close</button>
      </div>
    </>
  );
}
export default EditLanguages;
