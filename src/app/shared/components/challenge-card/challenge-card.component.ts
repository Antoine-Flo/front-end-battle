import { Component, Input, OnInit } from '@angular/core';
import { ChallengeService } from 'src/app/core/services/challenge.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-challenge-card',
  templateUrl: './challenge-card.component.html',
  styleUrls: ['./challenge-card.component.scss'],
})
export class ChallengeCardComponent implements OnInit {
  imgUrl: string;
  @Input() challenge: any;

  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    this.storage.downloadViaUrl('tuto.jpg').subscribe((x) => (this.imgUrl = x));
  }
}
