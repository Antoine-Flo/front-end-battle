import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import firebase from 'firebase/app'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  user: any

  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.user = firebase.auth().currentUser;
  }


  onLogOut() {
    this.auth.logout().then(() => {
      this.router.navigate(['start']);
    })
  }
}
