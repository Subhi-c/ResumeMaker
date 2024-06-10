import EditContent from "./EditContent";
import { useState, useEffect } from "react";
function Certificates({ ConData, setConData }) {
  const [Certificate, setCertificate] = useState([]);
  useEffect(() => {
    setCertificate(ConData.certifications);
    console.log(Certificate);
  });
  return (
    <>
      {Certificate.map((Certi, index) => (
        <div key={index}>
          <h1>{Certi.name}</h1>
          <p>{Certi.issuing_organization}</p>
          <p>{Certi.issue_date}</p>
        </div>
      ))}
    </>
  );
}
export default Certificates;
