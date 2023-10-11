import React from "react";
import Dashboard from "../dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import NoPageFound from "../NoPageFound";
import Fonts from "../../components/fonts/Fonts";
import ColumnChart from "../../components/charts/ColumnChart";
import Tables from "../../components/table/Tables";
import Buttons from "../../components/buttons/Buttons";
import Inputs from "../../components/inputs/Inputs";

const Navigation = () => {
  return (
    <div>
      {" "}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/fonts" element={<Fonts />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/inputs" element={<Inputs />} />
        <Route path="/table" element={<Tables />} />

        <Route path="/column-chart" element={<ColumnChart />} />
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
