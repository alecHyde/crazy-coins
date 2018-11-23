import Layout from '../components/layout/layout';
import API from '../components/api/apiRequests';
import CurrencyChart from '../components/chart/Chart';

const Lira = (props) => (
  <Layout>
    <h3>Lira</h3>

    <CurrencyChart data={props.chartData}/>
   
  </Layout>
)


Lira.getInitialProps = async () => {

  const code = 'TRY';
  const liraCurrencyData = await API.getInternationalCurrency(code);

  return {
    chartData: liraCurrencyData
  }
}


export default Lira
