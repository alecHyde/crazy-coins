import RC2 from 'react-chartjs-2';
import API from '../api/apiRequests';

class CurrencyChart extends React.Component {
  constructor(props) {
    super(props);

    this.handleYearClick = this.handleYearClick.bind(this);
    this.handleMonthClick = this.handleMonthClick.bind(this);
    this.handleWeekClick = this.handleWeekClick.bind(this);
    this.getNewCurrencyData = this.getNewCurrencyData.bind(this);

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

  getNewCurrencyData() {
    const today = API.getDateToday();
    const lastYear = API.getDateLastYear();
    const lastMonth = API.getDateLastMonth();
    const lastWeek = API.getDateLastWeek();

    console.log('TODAY', today, 'LAST YEAR', lastYear, 'LAST MONTH', lastMonth, 'LAST WEEK', lastWeek);

    if(this.props.currency === 'international') {
      console.log('GET NEW DATA INTERNATIONAL')
    } else {
      console.log('GET NEW DATA CRYPTO')
    }
  }
 
  handleYearClick () {
    if(this.state.view === 'year') {
      return;
    }
    console.log('CLICKED year')
    this.getNewCurrencyData()
  }

  handleMonthClick () {
    if(this.state.view === 'month') {
      return;
    }
    console.log('CLICKED month')
    this.getNewCurrencyData()
  }

  handleWeekClick () {
    if(this.state.view === 'week') {
      return;
    }
    console.log('CLICKED week')
    this.getNewCurrencyData()
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
