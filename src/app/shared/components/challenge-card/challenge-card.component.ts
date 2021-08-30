import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { pluck, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { ChallengeService } from 'src/app/core/services/challenge.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-challenge-card',
  templateUrl: './challenge-card.component.html',
  styleUrls: ['./challenge-card.component.scss'],
})
export class ChallengeCardComponent implements OnInit {
  imgUrl: string;
  creatorName: string;
  creatorEmail: string;
  userEmail: string;
  @Input() challenge: any;
  @Output() challengeDeleted = new EventEmitter<string>();

  constructor(
    private storage: StorageService,
    private userService: UserService,
    private challengeService: ChallengeService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userEmail = this.authService.getUserEmail()
    // Get the image Url
    this.storage
      .downloadViaUrl(this.challenge.imgId)
      .subscribe((x) => (this.imgUrl = x));
    
    // Get the creator name and email
    // this.userService
    //   .getOne(this.challenge.creatorId)
    //   .pipe(
    //     tap(challenge => console.log(challenge)),
    //     pluck('username'),
    //   )
    //   .subscribe((x) => {
    //     this.creatorName = x;
    //   });
  }

  onDelete() {
    this.challengeService.delete(this.challenge.id).subscribe(() => {
      this.challengeDeleted.emit('Challenge supprimé');
    });
  }
}
