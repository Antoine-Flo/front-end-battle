import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, tap } from 'rxjs/operators';
import { Challenge } from 'src/app/core/models/challenge.model';
import { ChallengeService } from 'src/app/core/services/challenge.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit {
  @ViewChild('iframeResult', { static: true }) iframeResult!: ElementRef;
  @ViewChild('iframeObjective', { static: true }) iframeObjective!: ElementRef;

  challenge: Challenge;
  challengeId: string;
  objectiveCode: string;
  result: typeof document;
  objective: typeof document;

  idSubscription = this.route.params.subscribe((params) => {
    this.challengeId= params['id'];
  });


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
    private chalService: ChallengeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.result = this.iframeResult.nativeElement.contentWindow.document;
    this.objective = this.iframeObjective.nativeElement.contentWindow.document;
    this.chalService
      .getChallenge('610d49ec70939a00151c413f')
      .pipe(
        pluck('code'),
        tap((x) => this.updateIframe(this.objective, window.atob(x)))
      )
      .subscribe();
  }

  onCodeChange(code: string) {
    this.updateIframe(this.result, code);
  }

  private updateIframe(frameRef: any, code: string) {
    frameRef.open('text/htmlreplace');
    frameRef.write(code);
    frameRef.close();
  }
}
