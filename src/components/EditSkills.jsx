import { useState } from "react";
function EditSkills({
  section,
  ConData,
  setConData,
  editsection,
  seteditsection,
}) {
  // console.log(ConData, "ConData");
  const [formData, setFormData] = useState(ConData.Skills);
  const [newSkill, setnewSkill] = useState("");
  const [addNew, setaddNew] = useState(false);
  // console.log(formData, "form daa");
  const handleChange = (e) => {
    setnewSkill(e.target.value);
  };
  function handleAddSkill() {
    if (newSkill === "") return;
    setFormData((prevFormData) => {
      const updatedFormData = [...prevFormData, newSkill];
      setConData((prevConData) => ({
        ...prevConData,
        Skills: updatedFormData,
      }));
      return updatedFormData;
    });
    setnewSkill("");
    setaddNew(false);
  }
  function handleAddNew() {
    setaddNew(true);
  }
  function handleDeleteSkill(e) {
    let id = e.target.id;
    setFormData(formData.filter((_, index) => index != id));
    // console.log(e);
  }
  function handleCloseNew() {
    seteditsection(false);
  }
  return (
    <>
      <div>
        {formData.map((skill, index) => (
          <div key={index}>
            <input type="text" value={skill} />
            <button className="option" id={index} onClick={handleDeleteSkill}>
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
            value={newSkill}
            onChange={handleChange}
          />
          <button className="option" onClick={handleAddSkill}>
            Save
          </button>
        </div>
      )}
      <div>
        <button className="option" onClick={handleAddNew}>
          Add NEW
        </button>
        <button className="option" onClick={handleCloseNew}>
          Close
        </button>
      </div>
    </>
  );
}
export default EditSkills;
