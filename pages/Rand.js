import Layout from '../components/layout/layout';
import API from '../components/api/apiRequests';
import CurrencyChart from '../components/chart/Chart';

const Rand = (props) => (
  <Layout>
    <h3>Rand</h3>
    <CurrencyChart data={props.chartData}/>
  </Layout>
)

Rand.getInitialProps = async () => {
  const startDate = API.getDateLastYear();
  const endDate = API.getDateToday()
  const code = 'ZAR';
  const randCurrencyData = await API.getInternationalCurrency(code, startDate, endDate);

  return {
    chartData: randCurrencyData
  }
}

export default Rand