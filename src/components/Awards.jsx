import EditContent from "./EditContent";
import { useState, useEffect } from "react";
function Awards({ ConData, setConData }) {
  const [Awards, setAwards] = useState([]);
  useEffect(() => {
    setAwards(ConData.awards);
    console.log(Awards);
  });
  return (
    <>
      <div>
        {Awards.map((Award, index) => (
          <div key={index}>
            <div>
              <h1>{Award.title}</h1>
              <h5>{Award.organization}</h5>
              <h5>{Award.date}</h5>
              <p>{Award.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Awards;
