import { useState, useEffect } from "react";
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
          <div>
            <h1>{section.job_title}</h1>
            <p>{section.company}</p>
            <p>{section.location}</p>
            <p>{section.start_date}</p>
            <p>{section.end_date}</p>
            <ul>
              {section.responsibilities.map((resp, respIndex) => (
                <li>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
export default Experience;
