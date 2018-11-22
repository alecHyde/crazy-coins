
const formatInternationalCurrencyData = (data) => {
  console.log('DATA TO FORMAT', data.rates);
  let dataArr = [];
  for(let i in data.rates) {
    dataArr.push(
      {date: new Date([i][0]), data: data.rates[i].TRY}
    );
  }
  dataArr.sort((a, b) => a.date - b.date);
// console.log('dataArr', dataArr)
  const datesArr = [];
  const pricesArr = [];
  dataArr.forEach(item => {
    datesArr.push(item.date);
    pricesArr.push(item.data);
  });
// console.log('datesArr', datesArr);
// console.log('pricesArr', pricesArr);
  return [ datesArr, pricesArr ];
}

const formatCryptoCurrencyData = (data) => {

}

export default { formatInternationalCurrencyData, formatCryptoCurrencyData }
