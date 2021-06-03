import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { EditorDisplayComponent } from './components/editor-display/editor-display.component';
import { SafePipe } from './pipes/safe.pipe';


@NgModule({
  declarations: [CodeEditorComponent, EditorDisplayComponent, SafePipe],
  imports: [
    RouterModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    CodeEditorComponent,
    EditorDisplayComponent
  ]
})
export class SharedModule { }
