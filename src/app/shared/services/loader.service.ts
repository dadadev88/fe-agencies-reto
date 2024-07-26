import { Injectable } from "@angular/core";
import { DynamicComponentService } from "./dynamic-component.service";
import { BCPLoadingComponent } from "@shared/components/ui/bcp-loading/bcp-loading.component";
import { DynamicLoadingProps } from "@shared/models/dynamic-component.model";
import { DynamicLoadingData, DynamicLoadingKey } from "@shared/constants/dynamic-loading.constants";

@Injectable({ providedIn: 'root' })
export class LoaderService {

  constructor(private dynamicContainer: DynamicComponentService) { }

  show(key: DynamicLoadingKey = 'LO_001'): void {
    const componentRef = this.dynamicContainer.viewContainerRef
      .createComponent(BCPLoadingComponent);
    const instanceComponent = componentRef.instance;
    const props = this.getProps(key);
    instanceComponent.setProperties(props);
  }

  close(): void {
    if (this.dynamicContainer.viewContainerRef.length)
      this.dynamicContainer.viewContainerRef.clear()
  }

  getProps(keyProp: DynamicLoadingKey): DynamicLoadingProps {
    return DynamicLoadingData[keyProp];
  }
}
