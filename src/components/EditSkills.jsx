import { useState } from "react";
function EditSkills({
  section,
  ConData,
  setConData,
  editsection,
  seteditsection,
}) {
  console.log(ConData, "ConData");
  const [formData, setFormData] = useState(ConData.Skills);
  const [newSkill, setnewSkill] = useState("");
  const [addNew, setaddNew] = useState(false);
  console.log(formData, "form daa");
  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });
    // setFormData(FormData)
    setnewSkill(e.target.value);
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const updatedData = {
  //     ...ConData,
  //     ContactDetails: formData,
  //   };
  //   setConData(updatedData);
  //   seteditsection(false);
  // };
  function handleAddSkill() {
    // setFormData(FormData.push(newSkill));
    setFormData((prevFormData) => [...prevFormData, newSkill]);
    setnewSkill("");
    setaddNew(false);
  }
  function handleAddNew() {
    setaddNew(true);
  }
  function handleDeleteSkill(e) {
    let id = e.target.id;
    setFormData(formData.filter((_, index) => index != id));
    console.log(e);
  }
  return (
    <>
      <div>
        {formData.map((skill, index) => (
          <div key={index}>
            <input type="text" value={skill} />
            <button id={index} onClick={handleDeleteSkill}>
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
          <button onClick={handleAddSkill}>Save</button>
        </div>
      )}
      <div>
        <button onClick={handleAddNew}>Add NEW</button>
      </div>
    </>
  );
}
export default EditSkills;
