import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() hotel: string;
  @Output() onConfirmModal: EventEmitter<boolean> = new EventEmitter();

  onConfirm(response: boolean) {
    this.onConfirmModal.emit(response);
  }
}
