import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  defaultCode = `
  <!--Essayez de reproduire le modèle-->
  <!--Ecrivez votre code dans cet éditeur-->
  <!--Passez la souris sur la fenêtre à droite pour voir l'objectif-->
  
  <h1 class="title">Bonne Chance 😀<h1>
  
  <style>
    
      body {
          background-color: #00adb5;
      }
        
      .title {
          font-size: 4rem;
          font-family: sans-serif;
          color: #ddeeee;
          margin-top: 5rem;
          text-align: center;
      }
    
  </style>
  `;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  saveEvent() {
    console.log("save")
  }
  
  cancelEvent() {
    this.router.navigateByUrl('/home');
    console.log("cancel")
  }

}
