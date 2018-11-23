import Layout from '../components/layout/layout';
import API from '../components/api/apiRequests';
import CurrencyChart from '../components/chart/Chart';
import InternationalCitation from '../components/chart/InternationalCitation';

const Lira = (props) => (
  <Layout color1="#e30a17" color2="#ffffff" color3="#e30a17">
    <h1>Lira</h1>
    <CurrencyChart data={props.chartData} code='TRY'/>
    <InternationalCitation color="#ffffff"/>
  </Layout>
)


Lira.getInitialProps = async () => {
  const startDate = API.getDateLastYear();
  const endDate = API.getDateToday()
  const code = 'TRY';
  const liraCurrencyData = await API.getInternationalCurrency(code, startDate, endDate);

  return {
    chartData: liraCurrencyData
  }
}


export default Lira
