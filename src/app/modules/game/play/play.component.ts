import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  @ViewChild('iframeResult', { static: true }) iframeResult!: ElementRef;
  @ViewChild('iframeObjective', { static: true }) iframeObjective!: ElementRef;
  result: any;


  constructor() { }

  ngOnInit() {
    this.result = this.iframeResult.nativeElement.contentWindow.document;
  }

  onCodeChange(code: string) {
    this.result.open('text/htmlreplace');
    this.result.write(`${code}`);
    this.result.close();
  }

}
