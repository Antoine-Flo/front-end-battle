import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { pluck } from 'rxjs/operators';
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
  @Input() challenge: any;
  @Output() challengeDeleted = new EventEmitter<string>();

  constructor(
    private storage: StorageService,
    private userService: UserService,
    private challengeService: ChallengeService
  ) {}

  ngOnInit(): void {
    this.storage.downloadViaUrl(this.challenge.imgId).subscribe((x) => (this.imgUrl = x));
    this.userService
      .getOne(this.challenge.creatorId)
      .pipe(pluck('username'))
      .subscribe((x) => (this.creatorName = x));
  }

  onDelete() {
    this.challengeService.delete(this.challenge.id).subscribe(() => {
      this.challengeDeleted.emit("Challenge supprimé");
    });
  }
}
