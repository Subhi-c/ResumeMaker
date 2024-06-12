import { useState, useEffect } from "react";
function EditAwards({
  section,
  ConData,
  setConData,
  editsection,
  seteditsection,
}) {
  const [formData, setFormData] = useState(ConData.awards || []);
  const [newAwards, setNewAwards] = useState({
    title: "",
    organization: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAwards((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddAwards = () => {
    if (
      newAwards.title ||
      newAwards.organization ||
      newAwards.date ||
      newAwards.description === ""
    ) {
      console.log("not updated");
      return;
    }
    const updatedAwards = [...formData, newAwards];
    setFormData(updatedAwards);
    setConData((prevConData) => ({
      ...prevConData,
      awards: updatedAwards,
    }));
    setNewAwards({
      title: "",
      organization: "",
      date: "",
      description: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConData((prevConData) => ({
      ...prevConData,
      awards: formData,
    }));
  };

  function handlesave() {
    seteditsection(false);
  }
  function handleDeleteAwards(id) {
    const updatedAwards = formData.filter((_, index) => index !== id);
    setFormData(updatedAwards);
    setConData((prevConData) => ({
      ...prevConData,
      awards: updatedAwards,
    }));
  }
  return (
    <div>
      <h2>Awards</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          {formData.map((award, index) => (
            <li key={index}>
              <input
                type="text"
                name="title"
                id={`title${index}`}
                value={award.title}
                readOnly
              />
              <input
                type="text"
                name="organization"
                id={`organization${index}`}
                value={award.organization}
                readOnly
              />
              <input
                type="text"
                name="description"
                id={`description${index}`}
                value={award.description}
                readOnly
              />
              <input
                type="month"
                name="date"
                id={`date_${index}`}
                value={award.date}
                readOnly
              />
              <button type="button" onClick={() => handleDeleteAwards(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            name="title"
            value={newAwards.title}
            onChange={handleChange}
            placeholder="Awards title"
            required
          />
          <input
            type="text"
            name="organization"
            value={newAwards.organization}
            onChange={handleChange}
            placeholder="Issuing Organization"
            required
          />
          <input
            type="text"
            name="description"
            value={newAwards.description}
            onChange={handleChange}
            placeholder="description"
            required
          />
          <input
            type="month"
            name="date"
            value={newAwards.date}
            onChange={handleChange}
            placeholder="date"
            required
          />
          <button type="button" onClick={handleAddAwards}>
            Add Awards
          </button>
        </div>
        <div>
          <button type="submit" onClick={handlesave}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
export default EditAwards;
