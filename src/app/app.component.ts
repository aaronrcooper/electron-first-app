import { FileService } from './file.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private fileService: FileService) {}
  title = 'Angular Electron Test';
  files: string[];

  ngOnInit() {
    console.log('Getting files');
    this.fileService.getFiles().then(val => {
      this.files = val;
      console.log('Got the files: ', this.files);
    });
  }
}
