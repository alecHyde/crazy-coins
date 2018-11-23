import Layout from '../components/layout/layout';

import CurrencyChart from '../components/chart/Chart';


import RC2 from 'react-chartjs-2';

const Lira = (props) => {



  return (
    <Layout>
      <h3>Lira</h3>

      <CurrencyChart data={props.chartData}/>
     
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
