import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  user: any;

  settingsForm = new FormGroup({
    nom: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/),
    ]),
  });

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {

    const userId = this.userService.userId;
    this.userService.getOne(userId).subscribe((user) => {
      this.user = user;
    });
  }

  onSubmit() {}

}
