import { useState } from "react";

function EditExperience({
  section,
  ConData,
  setConData,
  editsection,
  seteditsection,
}) {
  const [formData, setFormData] = useState(ConData.experience || []);
  const [newExperience, setNewExperience] = useState({
    job_title: "",
    company: "",
    location: "",
    start_date: "",
    end_date: "",
    responsibilities: [],
  });
  const [newResponsibility, setNewResponsibility] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExperience((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddResponsibility = () => {
    if (newResponsibility.trim() === "") return;
    setNewExperience((prev) => ({
      ...prev,
      responsibilities: [...prev.responsibilities, newResponsibility],
    }));
    setNewResponsibility("");
  };

  function handleAddExperience() {
    if (
      newExperience.job_title === "" ||
      newExperience.company === "" ||
      newExperience.location === "" ||
      newExperience.start_date === "" ||
      newExperience.end_date === ""
    )
      return;
    const updatedExperience = [...formData, newExperience];
    setFormData(updatedExperience);
    setConData((prevConData) => ({
      ...prevConData,
      experience: updatedExperience,
    }));
    setNewExperience({
      job_title: "",
      company: "",
      location: "",
      start_date: "",
      end_date: "",
      responsibilities: [],
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setConData((prevConData) => ({
      ...prevConData,
      experience: formData,
    }));
    seteditsection(false);
  };

  function handleDeleteExperience(id) {
    const updatedExperience = formData.filter((_, index) => index !== id);
    setFormData(updatedExperience);
    setConData((prevConData) => ({
      ...prevConData,
      experience: updatedExperience,
    }));
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <ul>
            {formData.map((exp, index) => (
              <li key={index}>
                <input
                  type="text"
                  name="job_title"
                  id={`job_title${index}`}
                  value={exp.job_title}
                  readOnly
                />
                <input
                  type="text"
                  name="company"
                  id={`company${index}`}
                  value={exp.company}
                  readOnly
                />
                <input
                  type="text"
                  name="location"
                  id={`location${index}`}
                  value={exp.location}
                  readOnly
                />
                <input
                  type="month"
                  name="start_date"
                  id={`start_date${index}`}
                  value={exp.start_date}
                  readOnly
                />
                <input
                  type="month"
                  name="end_date"
                  id={`end_date${index}`}
                  value={exp.end_date}
                  readOnly
                />
                <ul>
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>
                      <input
                        type="text"
                        name={`responsibilities${respIndex}`}
                        id={`resp${respIndex}`}
                        value={resp}
                        readOnly
                      />
                    </li>
                  ))}
                </ul>
                <button
                  className="option"
                  type="button"
                  onClick={() => handleDeleteExperience(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <div>
            <input
              type="text"
              name="job_title"
              value={newExperience.job_title}
              onChange={handleChange}
              placeholder="Job Title"
              required
            />
            <input
              type="text"
              name="company"
              value={newExperience.company}
              onChange={handleChange}
              placeholder="Company"
              required
            />
            <input
              type="text"
              name="location"
              value={newExperience.location}
              onChange={handleChange}
              placeholder="Location"
              required
            />
            <input
              type="month"
              name="start_date"
              value={newExperience.start_date}
              onChange={handleChange}
              placeholder="Start Date"
              required
            />
            <input
              type="month"
              name="end_date"
              value={newExperience.end_date}
              onChange={handleChange}
              placeholder="End Date"
              required
            />
            <div>
              <input
                type="text"
                name="newResponsibility"
                value={newResponsibility}
                onChange={(e) => setNewResponsibility(e.target.value)}
                placeholder="New Responsibility"
              />
              <button
                className="option"
                type="button"
                onClick={handleAddResponsibility}
              >
                Add Responsibility
              </button>
            </div>
            <ul>
              {newExperience.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
            <button
              className="option"
              type="button"
              onClick={handleAddExperience}
            >
              Add Experience
            </button>
          </div>
          <div>
            <button className="option" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default EditExperience;
