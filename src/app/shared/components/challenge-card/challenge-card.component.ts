import { Component, Input, OnInit } from '@angular/core';
import { pluck } from 'rxjs/operators';
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

  constructor(
    private storage: StorageService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.storage.downloadViaUrl('tuto.jpg').subscribe((x) => (this.imgUrl = x));
    this.userService
      .getOne(this.challenge.creatorId)
      .pipe(pluck('username'))
      .subscribe((x) => (this.creatorName = x));
  }
}
