import { Component, OnInit } from '@angular/core';
import { ChallengeService } from 'src/app/core/services/challenge.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
})
export class ChallengesComponent implements OnInit {
  challenges: any;

  constructor(private challengesService: ChallengeService) {}

  ngOnInit(): void {
    this.challenges = this.challengesService.getAll();
  }

}
