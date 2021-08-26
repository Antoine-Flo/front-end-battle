import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Challenge } from 'src/app/core/models/challenge.model';
import { ChallengeService } from 'src/app/core/services/challenge.service';

@Component({
  selector: 'app-game-layout',
  templateUrl: './game-layout.component.html',
  styleUrls: ['./game-layout.component.scss']
})
export class GameLayoutComponent implements OnInit {

  @ViewChild('iframeResult', { static: true }) iframeResult!: ElementRef;
  @ViewChild('iframeObjective', { static: true }) iframeObjective!: ElementRef;

  challenge: Challenge;
  objectiveCode: string;
  challengeId: string;
  result: typeof document;
  objective: typeof document;



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

    // Initialize the 2 iframes
    this.result = this.iframeResult.nativeElement.contentWindow.document;
    this.objective = this.iframeObjective.nativeElement.contentWindow.document;

    // Get the id from the Url
    this.route.params.subscribe(params => { this.challengeId = params['id'] })

    // Get the challenge code and update the iframe
    this.chalService
      .getOne(this.challengeId)
      .pipe(
        tap(x => this.challenge = x),
        tap(x => this.updateIframe(this.objective, x.code))
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
