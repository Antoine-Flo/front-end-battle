import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Challenge } from 'src/app/core/models/challenge.model';
import { ChallengeService } from 'src/app/core/services/challenge.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit {

  challenge: Challenge;
  challengeId: string;
  mode="play";

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
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    
    
    // Get the id from the Url
    this.route.params.subscribe(params => { this.challengeId = params['id'] })

    // Get the challenge
    this.chalService
      .getOne(this.challengeId)
      .pipe(
        tap(x => this.challenge = x),
      )
      .subscribe();
  }

  saveEvent() {
    console.log("save")
  }
  
  cancelEvent() {
    this.router.navigateByUrl('/home');
    console.log("cancel")
  }
}
