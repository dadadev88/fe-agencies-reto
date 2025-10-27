import { ElementRef } from "@angular/core";
import { ModalService } from "@shared/services/modal.service";


export abstract class ModalInputs<Data> {
  inputs: Data = {} as Data;

  setData(data: Data): void {
    this.inputs = data;
  }

  openModal(element: ElementRef): void {
    element.nativeElement.open();
  }

  closeModal(element: ElementRef, service: ModalService): void {
    service.close();
  }
}

export interface ModalOnClose<T> {
  onClose(data: T): void;
}
