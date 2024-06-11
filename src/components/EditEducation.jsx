import { useState, useEffect } from "react";

function EditEducation({
  section,
  ConData,
  setConData,
  editsection,
  seteditsection,
}) {
  const [formData, setFormData] = useState(ConData.education || []);
  const [newEducation, setnewEducation] = useState({
    degree: "",
    institution: "",
    location: "",
    graduation_year: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setnewEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  function handleAddEducation() {
    const updatedCertifications = [...formData, newEducation];
    setFormData(updatedCertifications);
    setConData((prevConData) => ({
      ...prevConData,
      education: updatedCertifications,
    }));
    setnewEducation({
      degree: "",
      institution: "",
      location: "",
      graduation_year: "",
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setConData((prevConData) => ({
      ...prevConData,
      education: formData,
    }));
  };
  function handlesave() {
    seteditsection(false);
  }
  function handleDeleteEducation(id) {
    const updatedEducation = formData.filter((_, index) => index !== id);
    setFormData(updatedEducation);
    setConData((prevConData) => ({
      ...prevConData,
      education: updatedEducation,
    }));
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <ul>
            {formData.map((edu, index) => (
              <li key={index}>
                <input
                  type="text"
                  name="degree"
                  id={`degree${index}`}
                  value={edu.degree}
                  readOnly
                />
                <input
                  type="text"
                  name="institution"
                  id={`institution${index}`}
                  value={edu.institution}
                  readOnly
                />
                <input
                  type="text"
                  name="location"
                  id={`location${index}`}
                  value={edu.location}
                  readOnly
                />
                <input
                  type="month"
                  name="graduation_year"
                  id={`graduation_year${index}`}
                  value={edu.graduation_year}
                  readOnly
                />
                <button
                  type="button"
                  onClick={() => handleDeleteEducation(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <div>
            <input
              type="text"
              name="degree"
              value={newEducation.degree}
              onChange={handleChange}
              placeholder="degree"
              required
            />
            <input
              type="text"
              name="institution"
              value={newEducation.institution}
              onChange={handleChange}
              placeholder="Institution"
              required
            />
            <input
              type="text"
              name="location"
              value={newEducation.location}
              onChange={handleChange}
              placeholder="Organization location"
              required
            />
            <input
              type="month"
              name="graduation_year"
              value={newEducation.graduation_year}
              onChange={handleChange}
              placeholder="graduation date"
              required
            />
            <button type="button" onClick={handleAddEducation}>
              Add Education
            </button>
          </div>
          <div>
            <button type="submit" onClick={handlesave}>
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default EditEducation;
