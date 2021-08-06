import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @ViewChild('iframeResult', { static: true }) iframeResult!: ElementRef;
  result: any;
  defaultCode = `
<h1 class="title">Laissez libre cours à votre imagination 🎨<h1>

<style>
  
  body {
      background-color: #00adb5;
  }
    
  .title {
      font-size: 2.5rem;
      font-family: sans-serif;
      color: #ddeeee;
      margin-top: 8rem;
      text-align: center;
  }
  
</style>
  `

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
