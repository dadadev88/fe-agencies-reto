import { Injectable, Type } from '@angular/core';
import { ModalInputs } from '@shared/models/moda-data.model';
import { AppVCR } from './app-vcr.service';

export interface ModalService {
  open<T>(component: Type<ModalInputs<T>>, data: T): void;
  close(): void;
}

@Injectable({
  providedIn: 'root'
})
export class ModalServiceImp implements ModalService {

  constructor(private readonly appVcr: AppVCR) { }

  public open<T>(componentType: Type<ModalInputs<T>>, data: T): void {
    const componentRef = this.appVcr.viewContainerRef.createComponent(componentType);
    const component = componentRef.instance;
    component.setData(data);
    componentRef.changeDetectorRef.detectChanges();
  }

  public close(): void {
    if (this.appVcr.viewContainerRef.length)
      this.appVcr.viewContainerRef.clear()
  }
}
