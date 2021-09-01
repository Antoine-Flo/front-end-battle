import { Component, OnInit } from '@angular/core';
import { forkJoin, from, of } from 'rxjs';
import { concatMap, map, mergeMap, pluck, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
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
        tap(x => console.log(x))
        // pluck('challenges'),
        // mergeMap((arr) =>
        //   forkJoin(arr.map((chal) => this.challengesService.getOne(chal.id)))
        // )
      )
      .subscribe((result) => {
        this.userChallenges = result;
      });
  }

  onChallengeDeleted() {
    this.ngOnInit();
  }
}
