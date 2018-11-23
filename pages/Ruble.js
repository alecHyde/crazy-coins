import Layout from '../components/layout/layout';
import API from '../components/api/apiRequests';
import CurrencyChart from '../components/chart/Chart';

const Ruble = (props) => (
  <Layout color1="#0039a6" color2="#ffffff" color3="#d52b1e">
    <h1>Ruble</h1>
    <CurrencyChart data={props.chartData} code='RUB'/>
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