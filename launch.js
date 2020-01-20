const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

function createWindow () {
  // Cree la fenetre du navigateur.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + '/icon.png',
    webPreferences: {
      nodeIntegration: true
    },
  });
  win.resizable = false;
  win.fullScreenable = false;
  win.autoHideMenuBar =  true;

  // Dev mode only
  //win.webContents.openDevTools();

  // and load the index.html of the app.
  win.loadURL(url.format({
    protocol: 'file',
    slashes: true,
    pathname: `${__dirname}/dist/CryptoMessenger/index.html`
  }));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
