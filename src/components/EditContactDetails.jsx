import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
function EditContactDetails({ sec, Data, setData }) {
  console.log(Data, "Data");
  const [formData, setFormData] = useState(Data.personal_details);
  console.log(formData, "form daa");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      ...Data,
      personal_details: formData,
    };
    setData(updatedData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name</label>
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
          <label htmlFor="phone_number">phone number</label>
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
          <label htmlFor="email">email</label>
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
          <label htmlFor="linkedin">linkedin</label>
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
          <label htmlFor="website">website</label>
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
    </>
  );
}
export default EditContactDetails;
