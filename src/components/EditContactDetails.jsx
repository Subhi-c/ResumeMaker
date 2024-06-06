import React, { useState } from "react";

function EditContactDetails({
  section,
  ConData,
  setConData,
  editsection,
  seteditsection,
}) {
  // Initialize formData with ConData.ContactDetails
  const [formData, setFormData] = useState({
    name: ConData.ContactDetails.name || "",
    phone_number: ConData.ContactDetails.phone_number || "",
    email: ConData.ContactDetails.email || "",
    linkedin: ConData.ContactDetails.linkedin || "",
    website: ConData.ContactDetails.website || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConData((prevConData) => ({
      ...prevConData,
      ContactDetails: {
        ...prevConData.ContactDetails,
        ...formData,
      },
    }));
    seteditsection(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phone_number">Phone Number</label>
        <input
          type="number"
          name="phone_number"
          id="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="linkedin">LinkedIn</label>
        <input
          type="url"
          name="linkedin"
          id="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="website">Website</label>
        <input
          type="url"
          name="website"
          id="website"
          value={formData.website}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}

export default EditContactDetails;
