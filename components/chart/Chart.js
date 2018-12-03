import RC2 from 'react-chartjs-2';

class CurrencyChart extends React.Component {
  constructor(props) {
    super(props);

    this.handleYearClick = this.handleYearClick.bind(this);
    this.handleMonthClick = this.handleMonthClick.bind(this);
    this.handleWeekClick = this.handleWeekClick.bind(this);

    this.state = {
      view: 'year',
      coinCode: props.code,
      data: props.data
    }
  
  }

  chartOptions() {
    return {
      showScale: true,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true  
          },
          scaleLabel: {
            display: true,
            labelString: `USD/${this.state.coinCode}`
          }
        }]
      }

    }
  }
 
  handleYearClick () {
    if(this.state.view === 'year') {
      return
    }
    console.log('CLICKED year')
  }

  handleMonthClick () {
    if(this.state.view === 'month') {
      return
    }
    console.log('CLICKED month')
  }

  handleWeekClick () {
    if(this.state.view === 'week') {
      return
    }
    console.log('CLICKED week')
  }

  render () {
    return (
      <div>
        <RC2 data={this.state.data} type='line' options={this.chartOptions()} />
        <div>
          <button onClick={this.handleYearClick}> Year </button>
          <button onClick={this.handleMonthClick}> Month </button>
          <button onClick={this.handleWeekClick}> Week </button>
        </div>
        <style jsx>{`
          div {
            margin: 2em 5em;
          }
        `}</style>

        {console.log('STATE', this.state)}

      </div>
    )
  }
} 

export default CurrencyChart;
