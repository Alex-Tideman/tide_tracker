const $ = require('jquery');
const Chart = require('Chart.js')
const { getChartData } = require('./dataChartObject')

const showWeekChart = exports.showWeekChart = (data) => {
  $('.weekly-chart').show()

  let days = data['my_life']
  let labels = days.map((day) => {
    return Object.keys(day)[0]
  })
  let dayChartData =[]
  days.forEach((day) => {
    let dayData = day[Object.keys(day)[0]]
    for(var key in dayData) {
      dayChartData.push(parseInt(dayData[key]))
    }
  })


  const ctx = $("#weekChart");
  const myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: labels,
          datasets: getChartData(dayChartData)
      },
      options: {
          legend: {
            display: true,
            labels: {
              fontColor: 'rgba(235, 235, 235, 1)',
              fontSize: 10
            }
          },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
}
