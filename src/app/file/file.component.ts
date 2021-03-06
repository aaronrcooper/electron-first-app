import { FileService } from './../file.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  private files;
  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    this.fileService.getFiles();
  }

}
