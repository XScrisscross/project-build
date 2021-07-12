import { ipcMain, dialog, app, BrowserWindow, shell } from 'electron'

export default function () {
  ipcMain.on('render-event', (event, params) => {})
}
