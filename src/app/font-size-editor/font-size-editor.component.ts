import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'or',
  templateUrl: './font-size-editor.component.html',
})
export class FontSizeEditorComponent implements OnInit {
  fontSize = false;

  onChange(fontSize) {
    this.fontSize = fontSize;
  }
  constructor() {
  }
  ngOnInit() {
  }

}
