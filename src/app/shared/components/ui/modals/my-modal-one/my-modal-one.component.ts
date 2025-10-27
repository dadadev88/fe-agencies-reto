import { Component, ElementRef, ViewChild } from '@angular/core';
import { ModalInputs, ModalOnClose } from '@shared/models/moda-data.model';
import { ModalServiceImp } from '@shared/services/modal.service';

interface MyModalInputs {
  title: string;
  description: string;
  onClose(isAgree: boolean): void;
}

@Component({
  selector: 'bcp-my-modal-one',
  templateUrl: './my-modal-one.component.html',
  styleUrls: ['./my-modal-one.component.css']
})
export class MyModalOneComponent
  extends ModalInputs<MyModalInputs>
  implements ModalOnClose<boolean> {

  @ViewChild('modal')
  private readonly modal!: ElementRef;

  constructor(private readonly modalService: ModalServiceImp) {
    super();
  }

  confirmAction() {
    this.onClose(true);
    super.closeModal(this.modal, this.modalService);
  }

  closeModal() {
    this.onClose(false);
    super.closeModal(this.modal, this.modalService);
  }

  onClose(isAgree: boolean): void {
    this.inputs.onClose(isAgree);
  }
}
