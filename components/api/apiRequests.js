
import fetch from 'isomorphic-unfetch';
import formatData from './formatAPIData';
import apiKey from '../../config';

const getInternationalCurrency = async (currencyCode, startDate, endDate) => {

  const data = await fetch(`https://api.exchangeratesapi.io/history?start_at=${startDate}&end_at=${endDate}&symbols=${currencyCode}&base=USD`)
    .then(res => res.text());
  const dataObj = JSON.parse(data);

  const formattedICData = formatData.formatInternationalCurrencyData(dataObj, currencyCode);
  const chartData = formatChartData(formattedICData, currencyCode);

  return chartData;
}

const getCryptoCurrency = async (currencyCode, date) => {
  const data = await fetch(`https://api.nomics.com/v1/exchange-rates/history?key=${apiKey}&currency=${currencyCode}&start=${date}T01%3A01%3A01Z`)
    .then(res => res.text());
  const dataObj = JSON.parse(data);
  
  const formattedCCData = formatData.formatCryptoCurrencyData(dataObj);
  const chartData = formatChartData(formattedCCData, currencyCode);

  return chartData;
}

const formatChartData = (data, currencyCode) => {

  return {
    labels: data[0],
    datasets: [
      {
        label: `${currencyCode}`,
        data: data[1],
        backgroundColor: "rgba(55,55,55,0.3)",
        borderColor: "#c0b283",
        borderWidth: 8,
        lineTension: 1,
        pointRadius: 1,
        pointHoverBackgroundColor: "#e9b000",
        pointHoverRadius: 10,
        pointHoverBorderColor: "#373737",
        pointHoverBorderWidth: 2

      }
    ]
  }

}

const getDateLastYear = () => {
  const currentDate = new Date();
  const currentDateStr = currentDate.toISOString();
  const year = Number(currentDateStr.slice(0, 4));
  let lastYear = year - 1;
  lastYear = lastYear.toString();
  const month = currentDateStr.slice(5, 7);
  let day = currentDateStr.slice(8, 10);
  // leap years
  if(month === '2' && day === '29') {
    day = '28';
  }
  return `${lastYear}-${month}-${day}`;
}

const getDateToday = () => {
  const currentDate = new Date();
  const currentDateStr = currentDate.toISOString();
  return currentDateStr.slice(0, 10);

}

export default { getInternationalCurrency, getCryptoCurrency, getDateLastYear, getDateToday }
