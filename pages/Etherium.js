import Layout from '../components/layout/layout';
import API from '../components/api/apiRequests';
import CurrencyChart from '../components/chart/Chart';

const Etherium = (props) => (
  <Layout color1="#3c3c3d" color2="#ecf0f1" color3="#3c3c3d">
    <h3>Etherium</h3>
    <CurrencyChart data={props.chartData}/>
  </Layout>
)

Etherium.getInitialProps = async () => {
  const date = API.getDateLastYear();
  console.log('DATE', date);
  const code = 'ETH'; 
  const etheriumCurrencyData = await API.getCryptoCurrency(code, date);

  return {
    chartData: etheriumCurrencyData
  }
}

export default Etherium