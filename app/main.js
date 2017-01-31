const electron = require('electron');
const Menubar = require('menubar');
const menubar = Menubar({
  icon: './images/Running.png'
})

require('electron-reload')(__dirname);

menubar.on('ready', () => {
  console.log('Application is ready.');
});

menubar.on('after-create-window', function () {
  menubar.window.loadURL(`file://${__dirname}/index.html`);
});
