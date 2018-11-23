
const formatInternationalCurrencyData = (data, currencyCode) => {
  let dataArr = [];
  for(let i in data.rates) {
    dataArr.push(
      {date: new Date([i][0]), data: data.rates[i][currencyCode]}
    );
  }
  dataArr.sort((a, b) => a.date - b.date);

  const datesArr = [];
  const pricesArr = [];
  dataArr.forEach(item => {
    datesArr.push(item.date);
    pricesArr.push(item.data);
  });

  return [ datesArr, pricesArr ];
}

const formatCryptoCurrencyData = (data) => {
  const datesArr = [];
  const pricesArr = [];
  data.forEach(item => {
    datesArr.push(item.timestamp);
    pricesArr.push(item.rate);
  });

  return [ datesArr, pricesArr ];
}

export default { formatInternationalCurrencyData, formatCryptoCurrencyData }
