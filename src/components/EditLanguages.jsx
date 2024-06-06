import React, { useState } from "react";

function EditLanguages() {
  // Initialize state with an array of language objects
  const [languages, setLanguages] = useState([
    { language: "English", proficiency: "Fluent" },
    { language: "Spanish", proficiency: "Intermediate" },
  ]);

  const [newLanguage, setNewLanguage] = useState({
    language: "",
    proficiency: "",
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedLanguages = languages.map((lang, i) =>
      i === index ? { ...lang, [name]: value } : lang
    );
    setLanguages(updatedLanguages);
  };

  const handleNewLanguageChange = (e) => {
    const { name, value } = e.target;
    setNewLanguage({ ...newLanguage, [name]: value });
  };

  const handleAddLanguage = () => {
    setLanguages([...languages, newLanguage]);
    setNewLanguage({ language: "", proficiency: "" });
  };

  return (
    <div>
      <h2>Languages</h2>
      <ul>
        {languages.map((lang, index) => (
          <li key={index}>
            <input
              type="text"
              name="language"
              value={lang.language}
              onChange={(e) => handleChange(e, index)}
              placeholder="Language"
            />
            <input
              type="text"
              name="proficiency"
              value={lang.proficiency}
              onChange={(e) => handleChange(e, index)}
              placeholder="Proficiency"
            />
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          name="language"
          value={newLanguage.language}
          onChange={handleNewLanguageChange}
          placeholder="New Language"
        />
        <input
          type="text"
          name="proficiency"
          value={newLanguage.proficiency}
          onChange={handleNewLanguageChange}
          placeholder="New Proficiency"
        />
        <button onClick={handleAddLanguage}>Add Language</button>
      </div>
    </div>
  );
}

export default EditLanguages;
