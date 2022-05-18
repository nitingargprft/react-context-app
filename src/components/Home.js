import React, { useContext } from "react";
import { TranslatedLabel as ts } from "./TranslatedLabel";
function Home(props) {
  return (
    <div className="NGDemo">
      {ts("This is Home Component")}
      {/* <p style={{ color: "red" }}>{ts("Text Message", message)}</p> */}
    </div>
  );
}

export default Home;
