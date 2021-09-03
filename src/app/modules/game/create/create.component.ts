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
    private challengeService: ChallengeService
  ) {}

  ngOnInit() {}

  saveEvent($event) {
    this.code = $event.code;
    this.iframeToImgService.convertToImg($event.body).then((imgDataURL) => {
      this.previewImgUrl = imgDataURL;
    });
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
    this.challengeService.create(challengeInfos).subscribe(() => {
      this.ngOnInit()
      this.snackBarService.showSuccess('Challenge créé avec succès 👍');
      this.router.navigateByUrl('/profile')
    });
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
    font-size: 2rem;
    color: #ddeeee;
    margin-top: 5rem;
    text-align: center;
  }
  
</style>
  
    `;

}
