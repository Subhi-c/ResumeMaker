import React, { useState } from "react";

function EditCertifications({
  section,
  ConData,
  setConData,
  editsection,
  seteditsection,
}) {
  const [formData, setFormData] = useState(ConData.certifications || []);
  const [newCertification, setNewCertification] = useState({
    name: "",
    issuing_organization: "",
    issue_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCertification((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddCertification = () => {
    if (
      newCertification.name ||
      newCertification.issuing_organization ||
      newCertification.issue_date === ""
    ) {
      console.log("not updated");
      return;
    }
    const updatedCertifications = [...formData, newCertification];
    setFormData(updatedCertifications);
    setConData((prevConData) => ({
      ...prevConData,
      certifications: updatedCertifications,
    }));
    setNewCertification({
      name: "",
      issuing_organization: "",
      issue_date: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConData((prevConData) => ({
      ...prevConData,
      certifications: formData,
    }));
  };

  function handlesave() {
    seteditsection(false);
  }
  function handleDeleteCertification(id) {
    const updatedCertifications = formData.filter((_, index) => index !== id);
    setFormData(updatedCertifications);
    setConData((prevConData) => ({
      ...prevConData,
      certifications: updatedCertifications,
    }));
  }
  return (
    <div>
      <h2>Certifications</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          {formData.map((certi, index) => (
            <li key={index}>
              <input
                type="text"
                name="name"
                id={`name_${index}`}
                value={certi.name}
                readOnly
              />
              <input
                type="text"
                name="issuing_organization"
                id={`issuing_organization_${index}`}
                value={certi.issuing_organization}
                readOnly
              />
              <input
                type="month"
                name="issue_date"
                id={`issue_date_${index}`}
                value={certi.issue_date}
                readOnly
              />
              <button
                className="option"
                type="button"
                onClick={() => handleDeleteCertification(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            name="name"
            value={newCertification.name}
            onChange={handleChange}
            placeholder="Certification Name"
            required
          />
          <input
            type="text"
            name="issuing_organization"
            value={newCertification.issuing_organization}
            onChange={handleChange}
            placeholder="Issuing Organization"
            required
          />
          <input
            type="month"
            name="issue_date"
            value={newCertification.issue_date}
            onChange={handleChange}
            placeholder="Issue Date"
            required
          />
          <button
            className="option"
            type="button"
            onClick={handleAddCertification}
          >
            Add Certification
          </button>
        </div>
        <div>
          <button className="option" type="submit" onClick={handlesave}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditCertifications;
