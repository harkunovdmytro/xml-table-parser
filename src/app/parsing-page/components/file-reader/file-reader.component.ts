import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-file-reader',
  templateUrl: './file-reader.component.html',
  styleUrls: ['./file-reader.component.scss']
})
export class FileReaderComponent {
  @Output() onDocumentParsed = new EventEmitter<Element[][]>;

  fileSelected(event: any): void {
    const file = (event.target as { files: File[] }).files[0];

    if (file && file.type === 'text/xml') {
      const domParser = new DOMParser();

      file.text().then((res) => {
        const resultOfParsing = domParser.parseFromString(res, 'text/xml');
        const rows = resultOfParsing.documentElement.children;
        const parsedTable: Element[][] = [];
        let i = 0;

        while (rows.item(i)) {
          let j = 0;
          const row = rows.item(i);

          if (row) {
            while (row.children.item(j)) {
              const column = row.children.item(j);

              if (column) {
                if (!Array.isArray(parsedTable[i])) {
                  parsedTable[i] = [];
                }
                parsedTable[i].push(column);
              }

              j++;
            }
          }

          i++;
        }

        console.log('Table data: ', parsedTable);
        this.onDocumentParsed.emit(parsedTable);
      });
    }
  }
}
