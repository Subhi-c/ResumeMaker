import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import EditContent from "./EditContent";
import ContactDetails from "./ContactDetails";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";
import Languages from "./Languages";
import Certificates from "./Certificates";
import Awards from "./Awards";
import DumData from "../DummyData.json";
function MainContent({ Data, setData }) {
  // console.log(Data, "Data");
  const [ConData, setConData] = useState(DumData);
  // console.log(ConData, "MAin personal_details");
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
                <EditContent
                  section={section}
                  ConData={ConData}
                  setConData={setConData}
                />
                {React.createElement(componentMap[section.component], {
                  ConData,
                  setConData,
                })}
              </div>
            )
        )}
      </div>
      {/* <ContactDetails /> */}
    </>
  );
}
export default MainContent;
