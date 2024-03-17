import React from "react";
import "./CommunityRightBar.css";
import { Stocks } from "../../../dummyData";
import Online from "../Online/Online";

const MostDiscussedRightbar = () => {
  return (
    <>
      <h4 className="rightbarTitle">Most Discussed</h4>
      <ul className="rightbarCompanyList">
        {Stocks.map((stock) => (
          <Online key={stock.id} stock={stock} />
        ))}
      </ul>
    </>
  );
};

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <MostDiscussedRightbar />
      </div>
    </div>
  );
};

export default Rightbar;
