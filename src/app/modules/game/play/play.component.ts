import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  @ViewChild('iframe', { static: true }) iframe!: ElementRef;
  doc: any
  code = ""

  constructor() { }

  ngOnInit() {
    this.doc =  this.iframe.nativeElement.contentWindow.document;
    this.doc = this.doc
  }

  onCodeChange(code: string) {
    this.code = code;
    this.doc.open('text/htmlreplace');
    this.doc.write(`${code}`);
    this.doc.close();
  }

}
