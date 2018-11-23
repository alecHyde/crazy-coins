import Layout from '../components/layout/layout';
import API from '../components/api/apiRequests';
import CurrencyChart from '../components/chart/Chart';

const Etherium = (props) => (
  <Layout>
    <h3>Etherium</h3>
    <CurrencyChart data={props.chartData}/>
  </Layout>
)

Etherium.getInitialProps = async () => {
  const code = 'ETH';
  const etheriumCurrencyData = await API.getCryptoCurrency(code);

  return {
    chartData: etheriumCurrencyData
  }
}

export default Etherium