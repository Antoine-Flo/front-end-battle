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
  userEmail: string;
  userChallengesIds: string[];
  userChallenges: any;

  constructor(
    private challengesService: ChallengeService,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userEmail = this.authService.getUserEmail();

    this.userService
      .getOne(this.userEmail)
      .pipe(
        pluck('challenges'),
        mergeMap((arr) =>
          forkJoin(arr.map((id) => this.challengesService.getOne(id)))
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
