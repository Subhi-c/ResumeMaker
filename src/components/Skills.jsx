import { useState, useEffect } from "react";
import Dummydata from "../DummyData.json";
function Skills() {
  const [skills, setskills] = useState([]);
  useEffect(() => {
    setskills(Dummydata.skills);
    console.log(skills, "skills");
  });
  return (
    <>
      {skills.map((skill) => (
        <p>{skill}</p>
      ))}
    </>
  );
}
export default Skills;
