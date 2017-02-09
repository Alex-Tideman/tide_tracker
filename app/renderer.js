const $ = require('jquery');
const { ipcRenderer, remote } = require('electron');
const menubar = remote.require('./main')
const { showWeekChart } = require('./charts')
const moment = require('moment')

const setTime = () => {
  $('#today').append(moment().format('MMMM Do, YYYY'))
  $('#time').append(moment().format('h:mm:ss a'))
}

$('.today-chart').hide()
$('.weekly-chart').hide()

setTime()
setInterval(function () {
  $('#today').empty()
  $('#time').empty()
  setTime()
}, 1000)

$('#submit').on('click',(e) => {
  e.preventDefault()
  sendData()
})

$('#show-chart').on('click',(e) => {
  ipcRenderer.send('get-chart', 'get me my chart')
})

ipcRenderer.on('today', (event, data) => {
  showWeekChart(data)
})

ipcRenderer.on('resized', (event, data) => {
  showWeekChart(data.data, data.bounds.width)
})



const sendData = () => {
  let today = moment().format('MMMM Do, YYYY')
  ipcRenderer.send('today', {
    [today]: {
    'fruits': $('#fruits').val(),
    'veggies': $('#veggies').val(),
    'pushups': $('#pushups').val(),
    'running': $('#running').val(),
    'sleep': $('#sleep').val(),
    'chilling': $('#chilling').val(),
    'friends': $('#friends').val(),
    'dog': $('#dog').val(),
    'travel': $('#travel').val(),
    'hike': $('#hike').val(),
    'reading': $('#reading').val(),
    'coding': $('#coding').val(),
    'watching': $('#watching').val(),
    'experiencing': $('#experiencing').val(),
    'meditating': $('#meditating').val()
    }
  })
}
