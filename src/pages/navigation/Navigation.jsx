import React from "react";
import Dashboard from "../dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import NoPageFound from "../NoPageFound";

const Navigation = () => {
  return (
    <div>
      {" "}
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="*" element={<NoPageFound />} />

        {/* <Route
            path="/test"
            element={
              <Test translations={translations} lang={lang} darkMode={darkMode} />
            }
          /> */}
      </Routes>
    </div>
  );
};

export default Navigation;
