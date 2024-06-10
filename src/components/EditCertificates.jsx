import { useState, useEffect } from "react";
function EditCertificates({
  section,
  ConData,
  setConData,
  editsection,
  seteditsection,
}) {
  const [Certificate, setCertificate] = useState([]);
  useEffect(() => {
    setCertificate(ConData.certifications);
    console.log(Certificate, "from edit section");
  });
  return (
    <>
      <div>
        {Certificate.map((certi, index) => {
          <div key={index}>
            <div>
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                name="name"
                id={`name${index}`}
                value={certi.name}
              />
            </div>
            <div>
              <label htmlFor="issuing_organization">Organization :</label>
              <input
                type="text"
                name="issuing_organization"
                id={`issuing_organization${index}`}
                value={certi.issuing_organization}
              />
            </div>
            <div>
              <label htmlFor="issue_date">Date :</label>
              <input
                type="month"
                name="issue_date"
                id={`issue_date${index}`}
                value={certi.issue_date}
              />
            </div>
          </div>;
        })}
      </div>
    </>
  );
}
export default EditCertificates;
