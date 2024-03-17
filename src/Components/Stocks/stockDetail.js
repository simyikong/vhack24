import axios from 'axios';
import { useState, useEffect } from 'react';

const API_KEY = 'W3RLH13DI7DYTJIO';
const API_BASE_URL = 'https://www.alphavantage.co/query';

const StockDetail = ({stockSymbol}) => {
  const [stockDetail, setStockDetail] = useState(null);
  const [stock, setStock] = useState(null);

  useEffect(() => {
    const viewStockDetail = () => {
      axios.get(`${API_BASE_URL}`, {
        params: {
          function: 'OVERVIEW',
          symbol: stockSymbol,
          apikey: API_KEY
        }
      }).then(json => {
        setStock(stockSymbol);
        setStockDetail(json.data);
      })
    }
    if (stockSymbol && stockSymbol !== stock) {
      viewStockDetail();
    }    
  }, [stockSymbol, stockDetail, stock]);
  
  return (
      // eslint-disable-next-line no-prototype-builtins
    (stockDetail?.hasOwnProperty('Description')) ? (
      <div className='stock-detail-container'>
        <div className='stock-detail-basic'>{stockSymbol.toUpperCase()} ({stockDetail.Exchange})</div>
        <div className='stock-detail-basic'>{stockDetail.Sector} | {stockDetail.Industry} | {stockDetail.Country}</div>
        <p>{stockDetail && stockDetail.Description}</p>
        <table className='stock-detail-table'>
          <tbody>
            <tr><td className='colSpan-2' colSpan={2}>Key stats</td></tr>
            <tr><td>Market Cap: </td><td>{stockDetail.MarketCapitalization}</td></tr>
            <tr><td>EBITDA: </td><td>{stockDetail.EBITDA}</td></tr>
            <tr><td>P/E: </td><td>{stockDetail.PERatio}</td></tr>
            <tr><td>EPS: </td><td>{stockDetail.EPS}</td></tr>
            <tr><td>dividend: </td><td>{stockDetail.DividendPerShare}</td></tr>
            <tr><td>Shs Outstand: </td><td>{stockDetail.SharesOutstanding}</td></tr>
            <tr><td>Shs Float: </td><td>{stockDetail.SharesFloat}</td></tr>
            <tr><td>52 Wk High: </td><td>{stockDetail['52WeekHigh']}</td></tr>
            <tr><td>52 Wk Low: </td><td>{stockDetail['52WeekLow']}</td></tr>
          </tbody>
        </table>
      </div>
    )
    : (stockSymbol && (
      <p className='errorTxt'>
        <span>This is awkward...&#128517;</span> <br />
      </p>
    ))
  )
}

export default StockDetail;