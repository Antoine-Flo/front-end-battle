import {  AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';

import * as ace from "ace-builds";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild("editor") private editor!: ElementRef<HTMLElement>;

  constructor() { }

  ngAfterViewInit(): void {
    ace.config.set("fontSize", "14px");
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');
    const aceEditor = ace.edit(this.editor.nativeElement);
    aceEditor.session.setValue("<h1>Ace Editor works great in Angular!</h1>");

    aceEditor.setTheme('ace/theme/monokai');
    aceEditor.session.setMode('ace/mode/html');

    aceEditor.on("change", () => {
      console.log(aceEditor.getValue());
    });
  }


}
