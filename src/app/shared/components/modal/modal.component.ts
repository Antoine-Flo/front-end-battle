import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output() dismiss = new EventEmitter();

  constructor(private el: ElementRef) { }
  
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }
  
  ngOnDestroy() {
    this.el.nativeElement.remove()
  }
  
  onDismissClick() {
    this.dismiss.emit();
  }
}
