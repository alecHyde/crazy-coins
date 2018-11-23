import Layout from '../components/layout/layout';
import API from '../components/api/apiRequests';
import CurrencyChart from '../components/chart/Chart';

const Bitcoin = (props) => (
  <Layout>
    <h3>Bitcoin</h3>
    {console.log('DATA', props.chartData)}
    <CurrencyChart data={props.chartData}/>
  </Layout>
)

Bitcoin.getInitialProps = async () => {

  const code = 'BTC';
  const bitcoinCurrencyData = await API.getCryptoCurrency(code);

  return {
    chartData: bitcoinCurrencyData
  }

}

export default Bitcoin