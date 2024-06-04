import { useState, useEffect } from "react";
import EditContent from "./EditContent";
import Dummydata from "../DummyData.json";
function Experience() {
  const [experience, setexperience] = useState([]);
  useEffect(() => {
    setexperience(Dummydata.experience);
    console.log(experience, "experience");
  });
  return (
    <>
      <div>
        {experience.map((section, index) => (
          <div key={index}>
            <h1>{section.job_title}</h1>
            <p>{section.company}</p>
            <p>{section.location}</p>
            <p>{section.start_date}</p>
            <p>{section.end_date}</p>
            <ul>
              {section.responsibilities.map((resp, respIndex) => (
                <li key={respIndex}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
export default Experience;
