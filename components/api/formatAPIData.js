
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
    item.date = item.date.toISOString().slice(0, 10);
    datesArr.push(item.date);
    pricesArr.push(item.data);
  });

  return [ datesArr, pricesArr ];
}

const formatCryptoCurrencyData = (data) => {
  const datesArr = [];
  const pricesArr = [];
  data.forEach(item => {
    item.timestamp = item.timestamp.slice(0, 10);
    datesArr.push(item.timestamp);
    pricesArr.push(item.rate);
  });

  return [ datesArr, pricesArr ];
}

export default { formatInternationalCurrencyData, formatCryptoCurrencyData }
