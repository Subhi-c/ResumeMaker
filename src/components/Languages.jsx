import { useState, useEffect } from "react";
import EditContent from "./EditContent";
function Languages({ ConData, setConData }) {
  const [languages, setlanguages] = useState([]);
  useEffect(() => {
    setlanguages(ConData.languages);
    // console.log(skills, "skills");
  });
  return (
    <>
      <div>
        {languages.map((lang, index) => (
          <div key={index}>
            <div>
              <h3>{lang}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Languages;
