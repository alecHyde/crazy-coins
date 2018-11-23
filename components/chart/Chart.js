import RC2 from 'react-chartjs-2';

const CurrencyChart = (props) => {
  
  const chartOptions = {
    showScale: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true  
        }
      }]
    }

  }

  return (
    <div>
      <RC2 data={props.data} type='line' options={chartOptions} />
    </div>
  )
}

export default CurrencyChart;


//  var chartOptions = {
//             showScale: true,
//             pointDot: true,
//             showLines: false,

//             title: {
//                 display: true,
//                 text: 'Chart.js Bar Chart'
//             },

//             legend: {
//                 display: true,
//                 labels: {
//                     boxWidth: 50,
//                     fontSize: 10,
//                     fontColor: '#bbb',
//                     padding: 5,
//                 }
//             },

//         }


// var chartOptions = {
//     showScale: true,
//     pointDot: true,
//     showLines: false,

//     title: {
//         display: true,
//         text: 'Chart.js Bar Chart'
//     },

//     legend: {
//         display: true,
//         labels: {
//             boxWidth: 50,
//             fontSize: 10,
//             fontColor: '#bbb',
//             padding: 5,
//         }
//     },

//     scales: {
//       yAxes: [{
//           ticks: {
//               beginAtZero:true,
//               min: 0,
//               max: 100    
//           }
//         }]
//      }
// }