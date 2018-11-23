
const CryptoCitation = (props) => (
  <div>
    <p>
      Some or all data provided by Nomics.com <a href="https://p.nomics.com/cryptocurrency-bitcoin-api">  Cryptocurrency Market Data API</a>.
    </p>
    <style jsx>{`
      p {
        margin: 0em 2em;
        color: ${props.color}
      }
    `}</style>
  </div>
)

export default CryptoCitation;
