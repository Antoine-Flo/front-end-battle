import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

import { UserService } from 'src/app/core/services/user.service';
import { ChallengeService } from 'src/app/core/services/challenge.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  challenges: any;

  constructor(private challengesService: ChallengeService) {}

  ngOnInit(): void {
    this.challenges = this.challengesService.getAll();
  }

  onChallengeDeleted() {
    this.ngOnInit();
  }
}
