import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

import { UserService } from 'src/app/core/services/user.service';
import { ChallengeService } from 'src/app/core/services/challenge.service';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  challenges: any;

  constructor(private authService: AuthService, private challengesService: ChallengeService, private userService: UserService) {}

  ngOnInit(): void {
    this.challenges = this.challengesService.getAll();
    this.authService.getFirebaseCurrentUser().pipe(
      map(user => user.email),
      mergeMap(email => this.userService.getUserId(email))
    ).subscribe(id => this.userService.userId = id)
  }

  onChallengeDeleted() {
    this.ngOnInit();
  }
}
