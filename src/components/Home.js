import React, { useContext } from "react";
import translationContext from "../context/translation-context";
function Home(props) {
  const { message } = useContext(translationContext);
  return (
    <div>
      This is Home Component
      <p style={{ color: "red" }}>{message}</p>
    </div>
  );
}

export default Home;
