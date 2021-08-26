import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import firebase from 'firebase/app'
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  user: any;
  theme = "dark";
  screen= "little";
  elem: any;

  constructor(@Inject(DOCUMENT) private document: any, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user = firebase.auth().currentUser;
    this.elem = document.documentElement;
  }

  onLogOut() {
    this.auth.logout().then(() => {
      this.router.navigate(['start']);
    })
  }

  changeToDark() {
    this.theme = "dark";
    const body = document.querySelector('body');
    body.classList.remove("light-theme");
  }

  changeToLight() {
    this.theme = "light";
    const body = document.querySelector('body');
    body.classList.add("light-theme");
  }

  // Code for full screen mode found here : https://imvikaskohli.medium.com/how-to-implement-fullscreen-mode-in-angular-fb9f55c24f67

  openFullscreen() {
    this.screen = "full";
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }
  /* Close fullscreen */
  closeFullscreen() {
    this.screen = "little";
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }
}
