import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';

import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { ModalComponent } from './components/modal/modal.component';
import { SafePipe } from './pipes/safe.pipe';
import { LayoutComponent } from './components/layout/layout.component';
import { ChallengeCardComponent } from './components/challenge-card/challenge-card.component';


@NgModule({
  declarations: [
    CodeEditorComponent,
    NavComponent,
    FooterComponent,
    ModalComponent,
    SafePipe,
    LayoutComponent,
    ChallengeCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveFormsModule,
    LayoutComponent,
    CodeEditorComponent,
    NavComponent,
    FooterComponent,
    ModalComponent,
    ChallengeCardComponent
  ],
})
export class SharedModule {}
