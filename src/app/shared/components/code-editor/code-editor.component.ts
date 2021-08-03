import {  AfterViewInit, Component, ElementRef, ViewChild, OnInit, Input, EventEmitter, Output } from '@angular/core';

import * as ace from "ace-builds";

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements AfterViewInit {

  @ViewChild("editor") private editor!: ElementRef<HTMLElement>;
  @Input() mode = "";
  @Input() defaultCode: string;
  @Output() codeChange = new EventEmitter<string>();


  constructor() { }

  ngAfterViewInit(): void {

    ace.config.set("fontSize", "25px");
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');

    const editor = ace.edit(this.editor.nativeElement);
    const session = editor.getSession();

    // Nice themes : v, merbivore, nord_dark
    editor.setTheme('ace/theme/merbivore_soft');
    editor.session.setMode(`ace/mode/${this.mode}`);
    editor.on("change", () => {
      this.codeChange.emit(editor.getValue())
    });
    editor.setValue(this.defaultCode, 1);

    session.setUseWorker(false);
  }
}
