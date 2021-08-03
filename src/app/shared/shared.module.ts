import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { TabComponent } from './components/tab/tab.component';

import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { ModalComponent } from './components/modal/modal.component';
import { SafePipe } from './pipes/safe.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    CodeEditorComponent,
    TabComponent,
    NavComponent,
    FooterComponent,
    ModalComponent,
    SafePipe,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  exports: [
    TabComponent,
    CodeEditorComponent,
    NavComponent,
    FooterComponent,
    ModalComponent,
    SafePipe,
    PageNotFoundComponent
  ],
})
export class SharedModule {}
