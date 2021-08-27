import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SnackBarService } from 'src/app/core/services/snack-bar.service';
import { ChallengeService } from 'src/app/core/services/challenge.service';
import { IframeToImgService } from 'src/app/core/services/iframe-to-img.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  modalSaveNew = false;
  result: any;
  code: string;

  previewImgUrl: string;

  formChallenge = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private snackBarService: SnackBarService,
    private iframeToImgService: IframeToImgService,
    private challenge: ChallengeService
  ) {}

  ngOnInit() {}

  saveEvent($event) {
    this.iframeToImgService.convertToImg($event.body).then((imgDataURL) => {
      this.previewImgUrl = imgDataURL;
    });
    this.code = $event.code;
    this.modalSaveNew = true;
  }

  cancelEvent() {
    this.router.navigateByUrl('/home');
  }

  onSubmit() {
    const challengeInfos = {
      title: this.formChallenge.get('title').value,
      description: this.formChallenge.get('description').value,
      code: this.code,
      imgData: this.previewImgUrl,
    };
    this.challenge.create(challengeInfos).subscribe();
    this.snackBarService.showSuccess('Challenge créé avec succès 👍');
    // this.router.navigateByUrl('/profile/challenges')
  }

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
    margin-top: 5rem;
    text-align: center;
  }
  
</style>
  
    `;

}
