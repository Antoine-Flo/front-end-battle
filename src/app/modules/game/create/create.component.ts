import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ChallengeService } from 'src/app/core/services/challenge.service';
import { IframeToImgService } from 'src/app/core/services/iframe-to-img.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  @ViewChild('iframeResult', { static: true }) iframeResult!: ElementRef;

  modalSaveNew = false;
  result: any;
  code: string;

  previewImgUrl: string;

  formChallenge = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  constructor(
    private iframeToImgService: IframeToImgService,
    private challenge: ChallengeService
  ) {}

  ngOnInit() {
    this.result = this.iframeResult.nativeElement.contentWindow.document;
  }

  onCodeChange(code: string) {
    this.code = code;
    this.result.open('text/htmlreplace');
    this.result.write(`${this.normalize} ${code}`);
    this.result.close();
  }

  onSubmit() {
    const challengeInfos = {
      title: this.formChallenge.get('title').value,
      description: this.formChallenge.get('description').value,
      code: this.code,
    };
    this.challenge.create(challengeInfos).subscribe();
  }

  // Create a canvas from the iframe and convert it to a blob.
  onClick() {
    this.iframeToImgService.convertToImg(this.result.body).then((imgDataURL) => {
      this.previewImgUrl = imgDataURL;
    });
  }

  defaultCode = `

  <!-- Bienvenue dans la section création -->
  <!-- Il sera enregistré en tant que brouillon sur votre profil -->
  <!-- Avant de pouvoir le partager à la communauté -->
  
  <h1 class="title">Laissez libre cours à votre imagination 🎨<h1>
  
  <style>
  
    
  body {
    height: 525px;
    width: 700px;
    overflow: hidden;
    background-color: #00adb5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  
  .title {
    font-size: 2.5rem;
    color: #ddeeee;
    margin-top: 5rem;
    text-align: center;
  }
  
  </style>
  
    `;

  normalize = `
<head>
<style>
 html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

body {
  margin: 0;
  height: 525px;
  width: 700px;
  overflow: hidden;
  background-color: #00adb5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}


hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

a {
  background-color: transparent;
}


abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}


b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

button,
input { /* 1 */
  overflow: visible;
}

button,
select { /* 1 */
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}


fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}


details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

</style>
</head>
`;
}
