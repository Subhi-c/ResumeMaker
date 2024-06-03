import { useState } from "react";

function CustomSection({ Data, setData, setcustomSection }) {
  const [Title, setTitle] = useState("");
  function saveCustomSection() {
    const customData = {
      id: Data.length + 1,
      Title: Title,
      inView: true,
    };
    setData((prevData) => [...prevData, customData]);
    setTitle("");
    setcustomSection(false);
  }
  return (
    <>
      <div>
        <label htmlFor="NameofSection">Name Of this Section :</label>
        <input
          type="text"
          name="NameofSection"
          id="NameofSection"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={saveCustomSection}>Save</button>
      </div>
    </>
  );
}

export default CustomSection;
