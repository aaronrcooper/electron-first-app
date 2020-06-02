import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private ipc: IpcRenderer;

  constructor() {
    if ((window).require) {
      try {
        console.log('Getting IPC');
        this.ipc = (window as any).require('electron').ipcRenderer;
      }
      catch (err) {
        throw err;
      }
    }
    else {
      console.warn('Could not load Electron IPC');
    }
  }

  async getFiles() {
    return new Promise<string[]>((resolve, reject) => {
      this.ipc.once('getFilesResponse', (event, arg) => {
        resolve(arg);
      });
      this.ipc.send('getFiles');
    });
  }
}
