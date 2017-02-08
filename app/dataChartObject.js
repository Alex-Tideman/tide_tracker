const getChartData = exports.getChartData = (dayChartData) => {
  // for(var i = 0; i < dayChartData.length; i++) {
  // }
  const greenBar = 'rgba(76, 195, 85, 0.2)'
  const blueBar = 'rgba(17, 204, 238, 0.2)'
  const yellowBar = 'rgba(255, 187, 17, 0.2)'
  const greenBorder = 'rgba(76, 195, 85, 1)'
  const blueBorder = 'rgba(17, 204, 238, 1)'
  const yellowBorder = 'rgba(255, 187, 17, 1)'

  return [
    {
      label: 'Chilling',
      borderColor: blueBorder,
      pointBorderColor: blueBorder,
      backgroundColor: blueBar,
      data: [{
          x: -10,
          y: dayChartData[0]
      }, {
          x: 0,
          y: dayChartData[15]
      }, {
          x: 10,
          y: dayChartData[30]
      }]
    },
    {
      label: 'Coding',
      borderColor: yellowBorder,
      pointBorderColor: yellowBorder,
      backgroundColor: yellowBar,
      data: [{
          x: -10,
          y: dayChartData[1]
      }, {
          x: 0,
          y: dayChartData[16]
      }, {
          x: 10,
          y: dayChartData[31]
      }]
    },
    {
      label: 'Dog',
      borderColor: blueBorder,
      pointBorderColor: blueBorder,
      backgroundColor: blueBar,
      data: [{
          x: -10,
          y: dayChartData[2]
      }, {
          x: 0,
          y: dayChartData[17]
      }, {
          x: 10,
          y: dayChartData[32]
      }]
    },
    {
      label: 'Experiencing',
      borderColor: yellowBorder,
      pointBorderColor: yellowBorder,
      backgroundColor: yellowBar,
      data: [{
          x: -10,
          y: dayChartData[3]
      }, {
          x: 0,
          y: dayChartData[18]
      }, {
          x: 10,
          y: dayChartData[33]
      }]
    },
    {
      label: 'Friends',
      borderColor: blueBorder,
      pointBorderColor: blueBorder,
      backgroundColor: blueBar,
      data: [{
          x: -10,
          y: dayChartData[4]
      }, {
          x: 0,
          y: dayChartData[19]
      }, {
          x: 10,
          y: dayChartData[34]
      }]
    },
    {
      label: 'Fruits',
      borderColor: greenBorder,
      pointBorderColor: greenBorder,
      backgroundColor: greenBar,
      data: [{
          x: -10,
          y: dayChartData[5]
      }, {
          x: 0,
          y: dayChartData[20]
      }, {
          x: 10,
          y: dayChartData[35]
      }]
    },
    {
      label: 'Hike',
      borderColor: blueBorder,
      pointBorderColor: blueBorder,
      backgroundColor: blueBar,
      data: [{
          x: -10,
          y: dayChartData[6]
      }, {
          x: 0,
          y: dayChartData[21]
      }, {
          x: 10,
          y: dayChartData[36]
      }]
    },
    {
      label: 'Meditating',
      borderColor: yellowBorder,
      pointBorderColor: yellowBorder,
      backgroundColor: yellowBar,
      data: [{
          x: -10,
          y: dayChartData[7]
      }, {
          x: 0,
          y: dayChartData[22]
      }, {
          x: 10,
          y: dayChartData[37]
      }]
    },
    {
      label: 'Pushups',
      borderColor: greenBorder,
      pointBorderColor: greenBorder,
      backgroundColor: greenBar,
      data: [{
          x: -10,
          y: dayChartData[8]
      }, {
          x: 0,
          y: dayChartData[23]
      }, {
          x: 10,
          y: dayChartData[38]
      }]
    },
    {
      label: 'Reading',
      borderColor: yellowBorder,
      pointBorderColor: yellowBorder,
      backgroundColor: yellowBar,
      data: [{
          x: -10,
          y: dayChartData[9]
      }, {
          x: 0,
          y: dayChartData[24]
      }, {
          x: 10,
          y: dayChartData[39]
      }]
    },
    {
      label: 'Running',
      borderColor: blueBorder,
      pointBorderColor: blueBorder,
      backgroundColor: blueBar,
      data: [{
          x: -10,
          y: dayChartData[10]
      }, {
          x: 0,
          y: dayChartData[25]
      }, {
          x: 10,
          y: dayChartData[40]
      }]
    },
    {
      label: 'Sleep',
      borderColor: greenBorder,
      pointBorderColor: greenBorder,
      backgroundColor: greenBar,
      data: [{
          x: -10,
          y: dayChartData[11]
      }, {
          x: 0,
          y: dayChartData[26]
      }, {
          x: 10,
          y: dayChartData[41]
      }]
    },
    {
      label: 'Walking',
      borderColor: greenBorder,
      pointBorderColor: greenBorder,
      backgroundColor: greenBar,
      data: [{
          x: -10,
          y: dayChartData[12]
      }, {
          x: 0,
          y: dayChartData[27]
      }, {
          x: 10,
          y: dayChartData[42]
      }]
    },
    {
      label: 'Veggies',
      borderColor: greenBorder,
      pointBorderColor: greenBorder,
      backgroundColor: greenBar,
      data: [{
          x: -10,
          y: dayChartData[13]
      }, {
          x: 0,
          y: dayChartData[28]
      }, {
          x: 10,
          y: dayChartData[43]
      }]
    },
    {
      label: 'Watching',
      borderColor: yellowBorder,
      pointBorderColor: yellowBorder,
      backgroundColor: yellowBar,
      data: [{
          x: -10,
          y: dayChartData[14]
      }, {
          x: 0,
          y: dayChartData[29]
      }, {
          x: 10,
          y: dayChartData[44]
      }]
    }
  ]
}
