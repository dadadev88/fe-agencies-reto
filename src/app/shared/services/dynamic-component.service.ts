import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DynamicComponentService {

  private container!: ViewContainerRef;

  public setContainer(container: ViewContainerRef): void {
    this.container = container;
  }

  public get viewContainerRef(): ViewContainerRef {
    return this.container;
  }
}
