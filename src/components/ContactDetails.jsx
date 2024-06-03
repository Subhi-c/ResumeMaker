import { useState, useEffect } from "react";
import Dummydata from "../DummyData.json";
function ContactDetails() {
  const [Personal, setPersonal] = useState([]);
  useEffect(() => {
    setPersonal(Dummydata.personal_details);
  });
  return (
    <>
      <div>
        <h1>{Personal.name}</h1>
        <p>{Personal.phone_number}</p>
        <p>{Personal.email}</p>
        <a href={Personal.linkedin}>{Personal.linkedin}</a>
        <br></br>
        <a href={Personal.website}>{Personal.website}</a>
      </div>
    </>
  );
}

export default ContactDetails;
