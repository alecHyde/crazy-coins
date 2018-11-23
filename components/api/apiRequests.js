
import fetch from 'isomorphic-unfetch';
import formatData from './formatAPIData';
import apiKey from '../../config';

let getInternationalCurrency = async (currencyCode) => {

  const data = await fetch(`https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-02-03&symbols=${currencyCode}&base=USD`)
    .then(res => res.text());
  const dataObj = JSON.parse(data);

  const formattedICData = formatData.formatInternationalCurrencyData(dataObj, currencyCode);
  const chartData = formatChartData(formattedICData, currencyCode);

  return chartData;
}

const getCryptoCurrency = async (currencyCode) => {
  const data = await fetch(`https://api.nomics.com/v1/exchange-rates/history?key=${apiKey}&currency=${currencyCode}&start=2018-10-01T01%3A01%3A01Z`)
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
        label: `${currencyCode}/USD`,
        data: data[1]
      }
    ]
  }

}

export default { getInternationalCurrency, getCryptoCurrency }
