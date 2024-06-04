import { useState, useEffect } from "react";
import EditContent from "./EditContent";
import Dummydata from "../DummyData.json";
function Skills() {
  const [skills, setskills] = useState([]);
  useEffect(() => {
    setskills(Dummydata.skills);
    console.log(skills, "skills");
  });
  return (
    <>
      <div>
        {skills.map((skill, index) => (
          <div key={index}>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default Skills;
