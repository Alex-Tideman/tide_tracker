const greenBar = 'rgba(76, 195, 85, 0.2)'
const blueBar = 'rgba(17, 204, 238, 0.2)'
const yellowBar = 'rgba(255, 187, 17, 0.2)'
const greenBorder = 'rgba(76, 195, 85, 1)'
const blueBorder = 'rgba(17, 204, 238, 1)'
const yellowBorder = 'rgba(255, 187, 17, 1)'

const getChartData = exports.getChartData = (dayChartData) => {

  const totalDays = dayChartData.length / 15
  const getCategoryData = (n) => {
    const points = []
    for(let i = 0; i < totalDays; i++) {
      points.push({x: (-10 + (i*10)), y: dayChartData[n + i*(15)]})
    }
    return points
  }

  return [
    {
      label: 'Chilling',
      borderColor: blueBorder,
      pointBorderColor: blueBorder,
      backgroundColor: blueBar,
      data: getCategoryData(0)
    },
    {
      label: 'Coding',
      borderColor: yellowBorder,
      pointBorderColor: yellowBorder,
      backgroundColor: yellowBar,
      data: getCategoryData(1)
    },
    {
      label: 'Dog',
      borderColor: blueBorder,
      pointBorderColor: blueBorder,
      backgroundColor: blueBar,
      data: getCategoryData(2)
    },
    {
      label: 'Experiencing',
      borderColor: yellowBorder,
      pointBorderColor: yellowBorder,
      backgroundColor: yellowBar,
      data: getCategoryData(3)
    },
    {
      label: 'Friends',
      borderColor: blueBorder,
      pointBorderColor: blueBorder,
      backgroundColor: blueBar,
      data: getCategoryData(4)
    },
    {
      label: 'Fruits',
      borderColor: greenBorder,
      pointBorderColor: greenBorder,
      backgroundColor: greenBar,
      data: getCategoryData(5)
    },
    {
      label: 'Hike',
      borderColor: blueBorder,
      pointBorderColor: blueBorder,
      backgroundColor: blueBar,
      data: getCategoryData(6)
    },
    {
      label: 'Meditating',
      borderColor: yellowBorder,
      pointBorderColor: yellowBorder,
      backgroundColor: yellowBar,
      data: getCategoryData(7)
    },
    {
      label: 'Pushups',
      borderColor: greenBorder,
      pointBorderColor: greenBorder,
      backgroundColor: greenBar,
      data: getCategoryData(8)
    },
    {
      label: 'Reading',
      borderColor: yellowBorder,
      pointBorderColor: yellowBorder,
      backgroundColor: yellowBar,
      data: getCategoryData(9)
    },
    {
      label: 'Running',
      borderColor: blueBorder,
      pointBorderColor: blueBorder,
      backgroundColor: blueBar,
      data: getCategoryData(10)
    },
    {
      label: 'Sleep',
      borderColor: greenBorder,
      pointBorderColor: greenBorder,
      backgroundColor: greenBar,
      data: getCategoryData(11)
    },
    {
      label: 'Walking',
      borderColor: greenBorder,
      pointBorderColor: greenBorder,
      backgroundColor: greenBar,
      data: getCategoryData(12)
    },
    {
      label: 'Veggies',
      borderColor: greenBorder,
      pointBorderColor: greenBorder,
      backgroundColor: greenBar,
      data: getCategoryData(13)
    },
    {
      label: 'Watching',
      borderColor: yellowBorder,
      pointBorderColor: yellowBorder,
      backgroundColor: yellowBar,
      data: getCategoryData(14)
    }
  ]
}
