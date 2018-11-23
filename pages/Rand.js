import Layout from '../components/layout/layout';
import API from '../components/api/apiRequests';
import CurrencyChart from '../components/chart/Chart';
import InternationalCitation from '../components/chart/InternationalCitation';

const Rand = (props) => (
  <Layout color1="#000000" color2="#ffb612" color3="#007a4d">
    <h1>Rand</h1>
    <CurrencyChart data={props.chartData} code='ZAR'/>
    <InternationalCitation color="#ffb612"/>
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