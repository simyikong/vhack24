import React from "react";

// import { ConditionallyRender } from "react-util-kit";

import Header from "../Components/Header/Header";
import Subheader from "../Components/Subheader/Subheader";
// import ExchangeList from "../Components/ExchangeList/ExchangeList";
// import TopFiveDividendStocksList from "../Components/TopFiveDividendStocksList/TopFiveDividendStocksList";
// import InfoCard from "../Components/InfoCard/InfoCard";
// import StockList from "../Components/StockList/StockList";
import Layout from "../Components/Layout/Layout";

// import { getTopFiveDividendStocks, getInfoCardData } from "../helpers2";

// import styles from "./Dashboard.module.css";

const About = () => {
  return (
    <>
      <Header />
      <Subheader>
        {/*<ExchangeList exchanges={exchanges} />*/}
        {/*<TopFiveDividendStocksList stocks={getTopFiveDividendStocks(stocks)} />*/}
        {/*<div className={styles.infoCardContainer}>*/}
        {/*  <InfoCard*/}
        {/*    title="Highest dividend yield in current year"*/}
        {/*    stock={getInfoCardData("yieldcurrent", stocks)}*/}
        {/*  />*/}
        {/*  <InfoCard*/}
        {/*    title="Highest dividend yield all time"*/}
        {/*    stock={getInfoCardData("yieldcompounded", stocks)}*/}
        {/*  />*/}
        {/*  <InfoCard*/}
        {/*    title="Highest dividend yield growth in past 3 years"*/}
        {/*    stock={getInfoCardData("growth", stocks)}*/}
        {/*    darkmode*/}
        {/*  />*/}
        {/*</div>*/}
      </Subheader>

      <Layout>
        {/*<ConditionallyRender*/}
        {/*  ifTrue={stocks.length}*/}
        {/*  show={<StockList stocks={stocks} setStocks={setStocks} />}*/}
        {/*/>*/}
      </Layout>
    </>
  );
};

export default About;
