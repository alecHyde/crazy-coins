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
  const startDate = API.getDateLastYear();
  const endDate = API.getDateToday()
  const code = 'RUB';
  const rubleCurrencyData = await API.getInternationalCurrency(code, startDate, endDate);

  return {
    chartData: rubleCurrencyData
  }
}

export default Ruble