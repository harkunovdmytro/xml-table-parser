import { Component } from '@angular/core';

@Component({
  selector: 'app-parsing-page',
  templateUrl: './parsing-page.component.html',
  styleUrls: ['./parsing-page.component.scss']
})
export class ParsingPageComponent {
  tableDoc: Element[][] | null = null;
}
