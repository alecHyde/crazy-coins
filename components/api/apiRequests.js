
import fetch from 'isomorphic-unfetch';
import formatData from './formatAPIData';

let getInternationalCurrency = async (currencyCode) => {


  const data = await fetch(`https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-02-03&symbols=${currencyCode}&base=USD`)
    .then(res => res.text());
  const dataObj = await JSON.parse(data);
  const formattedData = await formatData.formatInternationalCurrencyData(dataObj)

  const chartData = {
    labels: formattedData[0],
    datasets: [
      {
        label: `${currencyCode}/USD`,
        data: formattedData[1]
      }
    ]
  }

  console.log('chartData', chartData)
  return chartData;
}

const getCryptoCurrency = () => {
  return 'CALLING WITHIN getCryptoCurrency'
}



export default { getInternationalCurrency, getCryptoCurrency }


// let chartData = {
//       labels: props.data[0],
//       datasets: [
//         {
//           label: 'End of day closing prices',
//           data: props.data[1]
//         }
//       ]
//     };