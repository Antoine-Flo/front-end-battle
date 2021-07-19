import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  @ViewChild('iframe', { static: true }) iframe!: ElementRef;
  defaultHtmlValue = ""
  defaultCssValue = ""
  doc: any
  html = ""
  css = ""

  constructor() { }

  ngOnInit() {
    this.doc =  this.iframe.nativeElement.contentWindow.document ;
  }

  htmlChange(code: string) {
    this.html = code;
    this.doc.open('text/htmlreplace');
    this.doc.write(`${code}<style>${this.css}</style>`);
    this.doc.close();
  }

  cssChange(code: string) {
    this.css = code;
    this.doc.open('text/htmlreplace');
    this.doc.write(`${this.html}<style>${code}</style>`);
    this.doc.close();
  }

}
