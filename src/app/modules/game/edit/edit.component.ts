import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, tap } from 'rxjs/operators';
import { Challenge } from 'src/app/core/models/challenge.model';
import { ChallengeService } from 'src/app/core/services/challenge.service';
import { IframeToImgService } from 'src/app/core/services/iframe-to-img.service';
import { SnackBarService } from 'src/app/core/services/snack-bar.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  challenge: Challenge;
  modalSaveNew = false;
  challengeId: string;
  imgUrl: string;
  defaultCode: any;
  code: string;
  previewImgUrl: string;

  formChallenge = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private challengeService: ChallengeService,
    private route: ActivatedRoute,
    private storageService: StorageService,
    private snackBarService: SnackBarService,
    private iframeToImgService: IframeToImgService,
  ) { }

  ngOnInit(): void {

        // Get the id from the Url
        this.route.params.subscribe(params => { this.challengeId = params['id'] })

        // Get the challenge then the imgUrl
        this.challengeService
          .getOne(this.challengeId)
          .pipe(
            tap(challenge => this.challenge = challenge),
            tap(challenge => this.defaultCode = challenge.code),
            mergeMap(challenge => this.storageService.downloadViaUrl(challenge.imgId))
          )
          .subscribe(url => this.imgUrl = url);
  }

  saveEvent($event) {
    this.code = $event.code;
    this.iframeToImgService.convertToImg($event.body).then((imgDataURL) => {
      this.previewImgUrl = imgDataURL;
    });
    this.formChallenge.controls['title'].setValue(this.challenge.title);
    this.formChallenge.controls['description'].setValue(this.challenge.description);
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
    this.challengeService.update(this.challenge.id, challengeInfos).subscribe(() => {
      this.ngOnInit()
      this.snackBarService.showSuccess('Challenge créé avec succès 👍');
      this.router.navigateByUrl('/profile/challenges')
    });
  }

}
