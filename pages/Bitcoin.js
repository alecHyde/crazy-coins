import Layout from '../components/layout/layout';
import API from '../components/api/apiRequests';

const Bitcoin = () => (
  <Layout>
    <h3>Bitcoin</h3>
  </Layout>
)

Bitcoin.getInitialProps = () => {
  const bitcoin = API.getCryptoCurrency();
  console.log('bitcoin getInitialProps', bitcoin);

  return {
    chartData: 'bitcoin thing for now'
  }

}

export default Bitcoin