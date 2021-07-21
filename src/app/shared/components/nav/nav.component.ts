import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {


  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit(): void {}

  onLogOut() {
    this.auth.logout().then(() => {
      this.router.navigate(['start']);
    })
  }
}
