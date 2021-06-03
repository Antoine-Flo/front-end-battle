import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  defaultHtmlValue = "<div></div>"
  defaultCssValue = `
.div {
  background-color: black;
}
  `
  innerHtml = ""
  constructor() { }

  ngOnInit(): void {
  }

  htmlChange(code: string) {
    this.innerHtml = code;
  }

  cssChange(code: string) {
    console.log("Css : " + code);
  }
}
