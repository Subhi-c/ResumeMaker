import { useState, useEffect } from "react";
import EditContent from "./EditContent";
function ContactDetails({ ConData, setConData }) {
  const [personal_details, setpersonal_details] = useState([]);
  useEffect(() => {
    console.log(ConData, "personal_details");
    //  / console.log(setConData.personal_details, "Dummydata.personal_details");
    setpersonal_details(ConData.personal_details);
    console.log(ConData, "personal_details after");
  });
  return (
    <>
      <div>
        <h1>{personal_details.name}</h1>
        <p>{personal_details.phone_number}</p>
        <p>{personal_details.email}</p>
        <a href={personal_details.linkedin}>{personal_details.linkedin}</a>
        <br></br>
        <a href={personal_details.website}>{personal_details.website}</a>
      </div>
    </>
  );
}

export default ContactDetails;
