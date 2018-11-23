
import Layout from '../components/layout/layout';

const Home = () => (
  <Layout color1="#ecf0f1" color2="#ecf0f1" color3="#ecf0f1">
    <div className="title">Welcome to crazy coins!</div>
    <p>
      Currency rates around the world are constantly changing. Some change faster than others. Three of the most volatile currencies are the Russian Ruble, the South African Rand, and the Turkish Lira. 
    </p>
    <p>
      Cryptocurrencies have also made headlines due to their volatility. Two of the largest cryptocurrencies are Bitcoin and Etherium.
    </p>
    <p>
      How do these currencies compare over the past year? Click on one of the currencies in the header to explore and see!
    </p>
    <style jsx>{`
      .title {
        color: #373737,
        font-size: 8.0em;
        font-weight: 800;
        margin: .5em .75em;
        border: 8px solid black;
      }
      p {
        color: "#373737",
        margin: 1em 3em;
        font-size: 2.0em;
        font-weight: 150;
        border: 8px solid red;
      }
    `}</style>
  </Layout>
)

export default Home;