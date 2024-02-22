import React from "react";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Work from "./pages/work/Work";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </>
  );
};

export default App;
