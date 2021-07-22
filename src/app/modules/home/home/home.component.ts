import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/core/services/db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private db: DbService) { }

  ngOnInit(): void {
  }

  onTest() {
    this.db.testBackend()
  }
}
