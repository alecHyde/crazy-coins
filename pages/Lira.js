import Layout from '../components/layout/layout';
import API from '../components/api/apiRequests';

import fetch from 'isomorphic-unfetch';
import RC2 from 'react-chartjs-2';

const Lira = (props) => {



  return (
    <Layout>
      <h3>Lira</h3>
   
    <RC2 data={props.chartData} type='line' />;
     
    </Layout>
  )
}

Lira.getInitialProps = async () => {

  const code = 'TRY'
  const liraCurrencyData = await API.getInternationalCurrency(code);


  return {
    chartData: liraCurrencyData
  }
}


export default Lira
