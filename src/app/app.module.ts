import { FileService } from './file.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileComponent } from './file/file.component';

@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    FileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
