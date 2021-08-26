import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { ModalComponent } from './components/modal/modal.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ChallengeCardComponent } from './components/challenge-card/challenge-card.component';

import { SafePipe } from './pipes/safe.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    CodeEditorComponent,
    NavComponent,
    FooterComponent,
    ModalComponent,
    SafePipe,
    LayoutComponent,
    ChallengeCardComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ],
  exports: [
    ReactiveFormsModule,
    LayoutComponent,
    CodeEditorComponent,
    NavComponent,
    FooterComponent,
    ModalComponent,
    ChallengeCardComponent,
  ],
})
export class SharedModule {}
