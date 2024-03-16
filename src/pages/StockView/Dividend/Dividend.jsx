import React from "react";

import DividendList from "../../../Components/DividendList/DividendList";
import DividendCalculator from "../../../Components/DividendCalculator/DividendCalculator";
import AggregatedDividend from "../../../Components/AggregatedDividend/AggregatedDividend";

import { getCurrentYear } from "../../../helpers";

import styles from "./Dividend.module.css";

const Dividend = ({ stock, ranking, stocks }) => {
  const currentYear = getCurrentYear();
  const currentYearDividend = stock.dividends[currentYear];

  return (
    <div className={styles.dividend}>
      <DividendList
        dividends={stock.dividends}
        ticker={stock.ticker}
        ranking={ranking}
      />

      <div className={styles.container}>
        <DividendCalculator
          ask={stock.ask}
          currentYearDividend={currentYearDividend}
        />
        <AggregatedDividend stocks={stocks} stock={stock} />
      </div>
    </div>
  );
};

export default Dividend;
