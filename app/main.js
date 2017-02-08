require('electron-reload')(__dirname);

const { app, ipcMain, dialog } = require('electron');
const fs = require('fs')
const Menubar = require('menubar');
const menubar = Menubar({
  width: 400,
  height: 500,
  icon: './images/icon.png'
})

const historyFile = 'my_life.json'
let fullHistory = null
let resizeTimer;

menubar.on('ready', () => {
  console.log('Application is ready.');
});

menubar.on('after-create-window', function () {
  menubar.window.loadURL(`file://${__dirname}/index.html`);
  menubar.window.on('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      menubar.window.webContents.send('resized' , {data: fullHistory, bounds: menubar.window.getBounds()});
    }, 250);
  })
});


ipcMain.on('today', (event, data) => {
  saveFile(data)
  event.sender.send('today', fullHistory)
})

ipcMain.on('get-chart', (event, data) => {
  event.sender.send('today', fullHistory)
})


const saveFile = (content) => {
  if (!content) { return; }
  writeHistory(readHistory(), content)
};

const readHistory = () => {
  return JSON.parse(fs.readFileSync(historyFile))
}

const writeHistory = (history, content) => {
  let sameDay = false
  let newHistory = history.my_life.map((day) => {
    if(Object.keys(day)[0] === Object.keys(content)[0]) {
      sameDay = true
      return content
    } else {
      return day
    }
  })
  history.my_life = newHistory
  if(!sameDay) history.my_life.push(content)
  fs.writeFileSync(historyFile, JSON.stringify(history, null, 2));
  fullHistory = history
}
