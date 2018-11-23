import Layout from '../components/layout/layout';
import API from '../components/api/apiRequests';
import CurrencyChart from '../components/chart/Chart';

const Ruble = (props) => (
  <Layout>
    <h3>Ruble</h3>
    <CurrencyChart data={props.chartData}/>
  </Layout>
)

Ruble.getInitialProps = async () => {
  const code = 'RUB';
  const rubleCurrencyData = await API.getInternationalCurrency(code);

  return {
    chartData: rubleCurrencyData
  }
}

export default Ruble