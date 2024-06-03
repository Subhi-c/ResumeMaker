import React from "react";
import ReactDOM from "react-dom/client";
import ContactDetails from "./ContactDetails";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";
import Languages from "./Languages";
import Certificates from "./Certificates";
import Awards from "./Awards";
function MainContent({ Data }) {
  console.log(Data, "Data");
  const componentMap = {
    ContactDetails,
    Experience,
    Skills,
    Languages,
    Certificates,
    Education,
    Awards,
  };
  return (
    <>
      <div>
        {Data.map(
          (section, index) =>
            section.inView && (
              <div key={index}>
                <h2>{section.Title}</h2>
                {React.createElement(componentMap[section.component])}
              </div>
            )
        )}
      </div>
      {/* <ContactDetails /> */}
    </>
  );
}
export default MainContent;
