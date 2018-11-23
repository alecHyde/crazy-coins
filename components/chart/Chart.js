import RC2 from 'react-chartjs-2';

const CurrencyChart = (props) => (
  <div>
    <RC2 data={props.data} type='line' />
  </div>
)

export default CurrencyChart;