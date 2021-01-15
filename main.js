'use strict';

const { app, BrowserWindow, Menu } = require('electron');
const S3 = require('aws-sdk/clients/s3');

// Comment line below to build the app
// require('electron-reload')(__dirname);

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        frame: true,
        resizable: true,
        useContentSize: true
    })

    // TODO: Uncomment the line below to disable menubar. This line prevents to use the console browser in Electron window.
    win.removeMenu();
    // win.setMenuBarVisibility(false);

    win.loadFile('index.html');

    win.setResizable(false);
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
