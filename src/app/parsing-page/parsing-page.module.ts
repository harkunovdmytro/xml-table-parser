import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParsingPageComponent } from './parsing-page.component';
import { FileReaderComponent } from './components/file-reader/file-reader.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    ParsingPageComponent,
    FileReaderComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ParsingPageComponent,
    FileReaderComponent,
    TableComponent
  ]
})
export class ParsingPageModule {
}
