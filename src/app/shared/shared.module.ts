import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { EditorDisplayComponent } from './components/editor-display/editor-display.component';
import { SafePipe } from './pipes/safe.pipe';
import { TabComponent } from './components/tab/tab.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    CodeEditorComponent,
    EditorDisplayComponent,
    SafePipe,
    TabComponent,
    LayoutComponent,
    NavComponent,
    FooterComponent,
  ],
  imports: [RouterModule, HttpClientModule, CommonModule, FormsModule],
  exports: [
    TabComponent,
    SafePipe,
    FormsModule,
    CodeEditorComponent,
    EditorDisplayComponent,
    NavComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
