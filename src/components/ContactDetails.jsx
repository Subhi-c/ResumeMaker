import { useState, useEffect } from "react";
import EditContent from "./EditContent";
function ContactDetails({ ConData, setConData }) {
  const [ContactDetails, setContactDetails] = useState([]);
  useEffect(() => {
    setContactDetails(ConData.ContactDetails);
  });
  return (
    <>
      <div>
        <h1>{ContactDetails.name}</h1>
        <p>{ContactDetails.phone_number}</p>
        <p>{ContactDetails.email}</p>
        <a href={ContactDetails.linkedin}>{ContactDetails.linkedin}</a>
        <br></br>
        <a href={ContactDetails.website}>{ContactDetails.website}</a>
      </div>
    </>
  );
}

export default ContactDetails;
