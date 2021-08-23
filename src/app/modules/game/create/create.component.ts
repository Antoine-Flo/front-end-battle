import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChallengeService } from 'src/app/core/services/challenge.service';
import html2canvas from 'html2canvas';
import app from 'firebase';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @ViewChild('iframeResult', { static: true }) iframeResult!: ElementRef;
  src: string;
  modalSaveNew = false;
  result: any;
  code: string;
  capturedImage: string;
  
  formChallenge = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)

  })


  defaultCode = `

<!-- Bienvenue dans la section création -->
<!-- Il sera enregistré en tant que brouillon sur votre profil -->
<!-- Avant de pouvoir le partager à la communauté -->

<h1 class="title">Laissez libre cours à votre imagination 🎨<h1>

<style>
  
body {
  background-color: #00adb5;
}

.title {
  font-size: 2.5rem;
  color: #ddeeee;
  margin-top: 8rem;
  text-align: center;
}

</style>
  `
  
  constructor(private challenge: ChallengeService) { }

  ngOnInit() {
    this.result = this.iframeResult.nativeElement.contentWindow.document;
  }

  onCodeChange(code: string) {
    this.code = code;
    this.result.open('text/htmlreplace');
    this.result.write(`${code}`);
    this.result.close();
  }

  onSubmit() {
    const challengeInfos = {
      title: this.formChallenge.get('title').value, 
      description: this.formChallenge.get('description').value, 
      code: this.code,
    }
    this.challenge.create(challengeInfos).subscribe();
  }

  clickMe() {
    html2canvas(document.getElementById('iframeResult')).then(canvas => {

      
      this.capturedImage = canvas.toDataURL();

      document.getElementById('iframeResult').appendChild(canvas);

      canvas.toBlob(blob => {     

        // this.uploadBlob(blob)

        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
          let base64data = reader.result;

        }
      });
    });
  }

  uploadBlob(file) {
    const ref = app.storage().ref().child('test2');
  
    ref.put(file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });

  }
  

}
