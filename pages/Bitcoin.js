import Layout from '../components/layout/layout';
import API from '../components/api/apiRequests';
import CurrencyChart from '../components/chart/Chart';
import CryptoCitation from '../components/chart/CryptoCitation';

const Bitcoin = (props) => (
  <Layout color1="#f2a900" color2="#ecf0f1" color3="#f2a900">
    <h1>Bitcoin</h1>
    <CurrencyChart data={props.chartData} code='BTC'/>
    <CryptoCitation color="#ecf0f1"/>
  </Layout>
)

Bitcoin.getInitialProps = async () => {
  const date = API.getDateLastYear();
  const code = 'BTC';
  const bitcoinCurrencyData = await API.getCryptoCurrency(code, date);

  return {
    chartData: bitcoinCurrencyData
  }

}

export default Bitcoin