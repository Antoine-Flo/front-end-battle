import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  @ViewChild('iframe', { static: true }) iframe!: ElementRef;
  defaultHtmlValue = "<div>Let's play</div>"
  defaultCssValue = "div {color: red}"
  doc: any
  html = ""
  css = ""

  constructor() { }

  ngOnInit() {
    let content = '<div>Ok</div><style>div{color:red}</style>';
    this.doc =  this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
    this.doc.open();
    this.doc.write(content);
    this.doc.close();
  }

  getDoc() {
  }

  htmlChange(code: string) {
    this.html = code;
    this.doc.open();
    this.doc.write(`${code}<style>${this.css}</style>`);
    this.doc.close();
  }

  cssChange(code: string) {
    this.css = code;
    this.doc.open();
    this.doc.write(`${this.html}<style>${code}</style>`);
    this.doc.close();
  }

}
