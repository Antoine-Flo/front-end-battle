import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { SafePipe } from './pipes/safe.pipe';
import { TabComponent } from './components/tab/tab.component';

import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    CodeEditorComponent,
    SafePipe,
    TabComponent,
    NavComponent,
    FooterComponent,
    ModalComponent,
  ],
  imports: [RouterModule, HttpClientModule, CommonModule, FormsModule],
  exports: [
    TabComponent,
    SafePipe,
    FormsModule,
    CodeEditorComponent,
    NavComponent,
    FooterComponent,
    ModalComponent
  ],
})
export class SharedModule {}
