import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ChallengeService } from 'src/app/core/services/challenge.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-challenges',
  templateUrl: './user-challenges.component.html',
  styleUrls: ['./user-challenges.component.scss'],
})
export class UserChallengesComponent implements OnInit {
  userId: string;
  userChallengesIds: string[];
  userChallenges: any;

  constructor(
    private challengesService: ChallengeService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userId = this.userService.userId;

    this.userService
      .getOne(this.userId)
      .pipe(
        map(user => user.challenges),

        mergeMap((arr) =>
          forkJoin(arr.map((chal) => this.challengesService.getOne(chal.id)))
        )
      )
      .subscribe((result) => {
        this.userChallenges = result;
      });
  }

  onChallengeDeleted() {
    this.ngOnInit();
  }
}
