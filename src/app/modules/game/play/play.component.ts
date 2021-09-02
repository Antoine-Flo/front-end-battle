import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, tap } from 'rxjs/operators';
import { Challenge } from 'src/app/core/models/challenge.model';
import { ChallengeService } from 'src/app/core/services/challenge.service';
import { IframeToImgService } from 'src/app/core/services/iframe-to-img.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit {

  challenge: Challenge;
  challengeId: string;
  imgUrl: string;
  code: string;
  previewImgUrl: string;
  
  modalSubmit = false;
  defaultCode = `
<!--Essayez de reproduire le modèle-->
<!--Ecrivez votre code dans cet éditeur-->
<!--Passez la souris sur la fenêtre à droite pour voir l'objectif-->

<h1 class="title">Bonne Chance 😀<h1>

<style>
  
    body {
        background-color: #00adb5;
    }
      
    .title {
        font-size: 4rem;
        font-family: sans-serif;
        color: #ddeeee;
        margin-top: 5rem;
        text-align: center;
    }
  
</style>
`;

  constructor(
    private router: Router,
    private chalService: ChallengeService,
    private route: ActivatedRoute,
    private storageService: StorageService,
    private iframeToImgService: IframeToImgService,
  ) {}

  ngOnInit() {

    // Get the id from the Url
    this.route.params.subscribe(params => { this.challengeId = params['id'] })

    // Get the challenge then the imgUrl
    this.chalService
      .getOne(this.challengeId)
      .pipe(
        tap(challenge => this.challenge = challenge),
        mergeMap(challenge => this.storageService.downloadViaUrl(challenge.imgId))
      )
      .subscribe(url => this.imgUrl = url);

  }

  saveEvent($event) {
    this.code = $event.code;
    this.iframeToImgService.convertToImg($event.body).then((imgDataURL) => {
      this.previewImgUrl = imgDataURL;
    });
    // this.formChallenge.controls['title'].setValue(this.challenge.title);
    // this.formChallenge.controls['description'].setValue(this.challenge.description);
    this.modalSubmit = true;
  }
  
  cancelEvent() {
    this.router.navigateByUrl('/home');
    console.log("cancel")
  }
}
