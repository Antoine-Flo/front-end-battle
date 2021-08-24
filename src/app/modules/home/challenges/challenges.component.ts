import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChallengeService } from 'src/app/core/services/challenge.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
})
export class ChallengesComponent implements OnInit {
  challenges: any;

  constructor(private challengesService: ChallengeService, private router: Router) {}

  ngOnInit(): void {
    this.challenges = this.challengesService.getAll();
  }

  onChallengeDeleted() {
    this.ngOnInit()
  }
}
