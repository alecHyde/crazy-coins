
const InternatonalCitation = (props) => (
  <div>
    <p>
      Some or all data provided by Exchangeratesapi.io <a href="https://exchangeratesapi.io/">  Foreign exchange rates API</a>.
    </p>
    <style jsx>{`
      p {
        margin: 0em 2em;
        color: ${props.color}
      }
    `}</style>
  </div>
)

export default InternatonalCitation;