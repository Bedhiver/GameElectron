'use strict';

const { app, BrowserWindow, Menu } = require('electron');
const S3 = require('aws-sdk/clients/s3');

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

    var isDev = process.env.APP_DEV ? (process.env.APP_DEV.trim() == "true") : false;

    if (isDev) {
        console.log(`dev mode is active == ${isDev}`);
        require('electron-reload')(__dirname);
        win.webContents.openDevTools();
    }
    else {
        console.log(`dev mode is inactive == ${isDev}`);
    }
    
    // Uncomment this line to disable the menu bar on macOS
    // win.setMenuBarVisibility(false);
    
    win.removeMenu();
    win.loadFile('index.html');
    
    // Workaround to enable useContentSize window option. useContentSize is necessary to display correct dimensions on Windows.
    // resizable is 'true' on window creation and we set it to false after the creation.
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
