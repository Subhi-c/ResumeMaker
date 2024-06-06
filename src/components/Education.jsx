import { useState, useEffect } from "react";
import EditContent from "./EditContent";
function Education({ ConData, setConData }) {
  const [education, seteducation] = useState([]);
  useEffect(() => {
    seteducation(ConData.education);
  });
  return (
    <>
      {education.map((edu, index) => (
        <div key={index}>
          <div>
            <h1>{edu.degree}</h1>
            <p>{edu.institution}</p>
            <p>{edu.location}</p>
            <p>{edu.graduation_year}</p>
          </div>
        </div>
      ))}
    </>
  );
}
export default Education;
