'use strict';

const { app, BrowserWindow, Menu } = require('electron');
const S3 = require('aws-sdk/clients/s3');

require('electron-reload')(__dirname);

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        frame: true
    })

    // TODO: Uncomment the line below to disable menubar. This line prevents to use the console browser in Electron window.
    // win.removeMenu();

    win.loadFile('index.html')
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
