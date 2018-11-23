import Layout from '../components/layout/layout';
import API from '../components/api/apiRequests';
import CurrencyChart from '../components/chart/Chart';
import CryptoCitation from '../components/chart/CryptoCitation';

const Etherium = (props) => (
  <Layout color1="#3c3c3d" color2="#ecf0f1" color3="#3c3c3d">
    <h1>Ethereum</h1>
    <CurrencyChart data={props.chartData} code='ETH'/>
    <CryptoCitation color="#ecf0f1"/>
  </Layout>
)

Etherium.getInitialProps = async () => {
  const date = API.getDateLastYear();
  const code = 'ETH'; 
  const etheriumCurrencyData = await API.getCryptoCurrency(code, date);

  return {
    chartData: etheriumCurrencyData
  }
}

export default Etherium