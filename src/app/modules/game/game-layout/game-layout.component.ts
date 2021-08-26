import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Challenge } from 'src/app/core/models/challenge.model';


@Component({
  selector: 'app-game-layout',
  templateUrl: './game-layout.component.html',
  styleUrls: ['./game-layout.component.scss']
})
export class GameLayoutComponent implements OnInit {

  @ViewChild('iframeResult', { static: true }) iframeResult!: ElementRef;
  @ViewChild('iframeObjective', { static: true }) iframeObjective!: ElementRef;

  @Input() challenge: Challenge;
  @Input() starterCode: string;
  @Input() mode: string;

  @Output() saveEvent = new EventEmitter<any>();
  @Output() cancelEvent = new EventEmitter<any>();

  objectiveCode: string;
  resultIframe: typeof document;
  objectiveIframe: typeof document;
  code: string;

  constructor() {}

  ngOnInit() {

    // Initialize the 2 iframes
    this.resultIframe = this.iframeResult.nativeElement.contentWindow.document;
    this.objectiveIframe = this.iframeObjective.nativeElement.contentWindow.document;    
    this.updateIframe(this.objectiveIframe, this.challenge.code)

  }

  onCodeChange(code: string) {
    this.code = code;
    this.updateIframe(this.resultIframe, code);
  }

  private updateIframe(frameRef: any, code: string) {
    frameRef.open('text/htmlreplace');
    frameRef.write(code);
    frameRef.close();
  }

  onSave() {
    this.saveEvent.emit()
  }

  onCancel() {
    this.cancelEvent.emit()
  }

}
