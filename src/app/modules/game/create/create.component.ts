import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @ViewChild('iframeResult', { static: true }) iframeResult!: ElementRef;
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
