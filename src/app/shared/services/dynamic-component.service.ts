import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { BCPLoadingComponent } from '@shared/components/ui/bcp-loading/bcp-loading.component';
import { DYNAMIC_LOADING_DATA } from '@shared/constants/dynamic-loading.constants';
import { DynamicLoadingProps } from '@shared/models/dynamic-component.model';

@Injectable({ providedIn: 'root' })
export class DynamicComponentService {

  public container!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  show(keyProp: string): void {
    const factory = this.resolver.resolveComponentFactory(BCPLoadingComponent);
    const componentRef = this.container.createComponent(factory);
    const instanceComponent = componentRef.instance;
    const props = this.getProps(keyProp);

    instanceComponent.setProperties(props);
  }

  close(): void {
    if (this.container.length)
      setTimeout(() => this.container.clear(), 800);
  }

  getProps(keyProp: string): DynamicLoadingProps {
    return DYNAMIC_LOADING_DATA[keyProp];
  }
}
