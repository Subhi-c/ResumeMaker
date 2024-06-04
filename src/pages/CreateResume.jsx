import { useState, useEffect } from "react";
import MyTitle from "../components/MyTitle";
import Options from "../components/Options";
import SlidingDiv from "../components/SlidingDiv";
import MainContent from "../components/MainContent";

import Sections from "../ManageSection.json";
function CreateResume() {
  const [isOpen, setIsOpen] = useState(false);
  const [SlidingContent, setSlidingContent] = useState([]);
  const [userOption, setuserOption] = useState("");
  const [Data, setData] = useState([]);
  useEffect(() => {
    setData(Sections.Sections);
    // console.log(Data);
  }, []);
  return (
    <>
      <MyTitle />
      <Options
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        SlidingContent={SlidingContent}
        setSlidingContent={setSlidingContent}
        userOption={userOption}
        setuserOption={setuserOption}
      />
      <SlidingDiv
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        SlidingContent={SlidingContent}
        setSlidingContent={setSlidingContent}
        userOption={userOption}
        setuserOption={setuserOption}
        Data={Data}
        setData={setData}
      />
      <MainContent Data={Data} setData={setData} />
    </>
  );
}

export default CreateResume;
