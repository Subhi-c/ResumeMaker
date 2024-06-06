import { useEffect } from "react";

function EditEducation({
  section,
  ConData,
  setConData,
  editsection,
  seteditsection,
}) {
  useEffect(() => {
    console.log(ConData, "COnData");
    console.log(section);
  });
  return (
    <>
      <div>
        <h1>ho</h1>
      </div>
    </>
  );
}
export default EditEducation;
