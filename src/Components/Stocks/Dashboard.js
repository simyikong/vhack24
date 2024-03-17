// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import StockHeader from "./StockHeader";
import LiveChart from "../../LiveChart";
import {mockCompanyDetails as stockDetails} from "../../constants/mock";

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
      <div className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand ${
          darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
      }`}>
        <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
          <StockHeader name={stockDetails.name} />
        </div>
        <div className="md:col-span-2 row-span-4">
          {/*<Chart />*/}
          <LiveChart symbol={'IBM'} />
        </div>
      </div>
  );
};

export default Dashboard;
