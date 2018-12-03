import RC2 from 'react-chartjs-2';
import API from '../api/apiRequests';

class CurrencyChart extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
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

  async getNewCurrencyData(timeline) {
    let startDate;
    if(timeline === 'year') {
      startDate = API.getDateLastYear();
    } else if(timeline === 'month') {
      startDate = API.getDateLastMonth();
    } else if (timeline === 'week') {
      startDate = API.getDateLastWeek();
    }
    
    if(this.props.currency === 'international') {
      const endDate = API.getDateToday();
      const newCurrencyData = await API.getInternationalCurrency(this.state.coinCode, startDate, endDate);
      return newCurrencyData;
    } else {
      const newCurrencyData = await API.getCryptoCurrency(this.state.coinCode, startDate);
      return newCurrencyData;
    }
  }
 
  async handleClick (e) {
    const view = e.target.value;
    if(this.state.view === view) {
      return;
    }
    const newData = await this.getNewCurrencyData(view);
    this.setState({
      view: view,
      data: newData
    });
  }

  render () {
    return (
      <div>
        <RC2 data={this.state.data} type='line' options={this.chartOptions()} />
        <div>
          <button value="year" onClick={this.handleClick}> Year </button>
          <button value="month" onClick={this.handleClick}> Month </button>
          <button value="week" onClick={this.handleClick}> Week </button>
        </div>
        <style jsx>{`
          div {
            margin: 2em 5em;
          }
        `}</style>
      </div>
    )
  }
} 

export default CurrencyChart;
