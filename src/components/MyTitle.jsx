import { useState } from "react";

function MyTitle() {
  const [Title, setTitle] = useState("My Resume");
  return (
    <>
      <input
        type="text"
        name="myTitle"
        id="myTitle"
        value={Title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </>
  );
}
export default MyTitle;
