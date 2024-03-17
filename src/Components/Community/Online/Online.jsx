import React from "react";
import "./Online.css";

export default function Online({ stock }) {
  // Determine the color of the price change
  const priceChangeColor = stock.priceChange.includes('-') ? 'red' : 'green';

  return (
      <li className="rightbarFriend">
        <div className="rightbarUserInfo">
          <div className="rightbarHeader">
            <span className="rightbarUsername">{stock.name}</span>
          </div>
          <div className="rightbarDetails">
            <span className="rightbarPrice">{stock.price}</span>
            {/* Apply color dynamically based on price change */}
            <span className="rightbarPriceChange" style={{ color: priceChangeColor }}>
            {stock.priceChange}
          </span>
          </div>
          {/* Progress bar for discussed frequency */}
          <div className="progressBar">
            <div className="progress" style={{ width: stock.discussedFrequency }}></div>
          </div>
          </div>
      </li>
  );
}
