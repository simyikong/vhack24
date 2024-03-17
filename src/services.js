export const fetchStockData = async (symbol) => {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=W3RLH13DI7DYTJIO`)
    const data = await response.json()
    return data
}

export const fetchStockCSV = async (symbol) => {
    const response = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=" + symbol + "&apikey=" + 'W3RLH13DI7DYTJIO' + "&datatype=csv")
    const csvfile = await response.json()
    return csvfile
}