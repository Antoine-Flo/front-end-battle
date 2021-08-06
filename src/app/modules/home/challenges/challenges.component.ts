import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChallengeService } from 'src/app/core/services/challenge.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {
  challenges: any;
  iframe: any;

  @ViewChild('iframeExemple', { static: true }) iframeExemple!: ElementRef;


  constructor(private challengesService: ChallengeService) { }

  ngOnInit(): void {
  }
  
  onShowChallenges() {
    return this.challengesService.getChallenges().subscribe(x => this.challenges = x);
    
  }

}
