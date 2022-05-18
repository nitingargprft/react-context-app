import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Feed from "./components/Feed";
import TranslationDataLoad from "./context/TranslationDataLoad";
const App = () => {
  return (
    <TranslationDataLoad>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/feed" element={<Feed />} />
        </Routes>
      </Router>
    </TranslationDataLoad>
  );
};

export default App;
