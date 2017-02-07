const $ = require('jquery');
const Chart = require('Chart.js')

const showTodaysChart = exports.showTodaysChart = (data) => {
  $('.today-chart').show()

  const dayData = data[Object.keys(data)[0]]
  let dayLabels = Object.keys(dayData)
  let dayChartData =[]
  for(var key in dayData) {
      dayChartData.push(parseInt(dayData[key]))
  }
  const ctx = $("#dayChart");
  const greenBar = 'rgba(76, 195, 85, 0.2)'
  const blueBar = 'rgba(17, 204, 238, 0.2)'
  const yellowBar = 'rgba(255, 187, 17, 0.2)'
  const greenBorder = 'rgba(76, 195, 85, 1)'
  const blueBorder = 'rgba(17, 204, 238, 1)'
  const yellowBorder = 'rgba(255, 187, 17, 1)'

  const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: dayLabels,
          datasets: [{
              label: '# of Votes',
              data: dayChartData,
              backgroundColor: [
                  greenBar,
                  greenBar,
                  greenBar,
                  greenBar,
                  greenBar,
                  blueBar,
                  blueBar,
                  blueBar,
                  blueBar,
                  blueBar,
                  yellowBar,
                  yellowBar,
                  yellowBar,
                  yellowBar,
                  yellowBar
              ],
              borderColor: [
                greenBorder,
                greenBorder,
                greenBorder,
                greenBorder,
                greenBorder,
                blueBorder,
                blueBorder,
                blueBorder,
                blueBorder,
                blueBorder,
                yellowBorder,
                yellowBorder,
                yellowBorder,
                yellowBorder,
                yellowBorder
              ],
              borderWidth: 1
          }]
      },
      options: {
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
  const greenBar = 'rgba(76, 195, 85, 0.2)'
  const blueBar = 'rgba(17, 204, 238, 0.2)'
  const yellowBar = 'rgba(255, 187, 17, 0.2)'
  const greenBorder = 'rgba(76, 195, 85, 1)'
  const blueBorder = 'rgba(17, 204, 238, 1)'
  const yellowBorder = 'rgba(255, 187, 17, 1)'
  const myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: labels,
          datasets: [{
            label: 'Scatter Dataset',
            data: [{
                x: -10,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 5
            }]
        }]
      },
      options: {
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
