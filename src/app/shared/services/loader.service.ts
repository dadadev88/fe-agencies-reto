import { Injectable } from "@angular/core";
import { AppVCR } from "./app-vcr.service";
import { BCPLoadingComponent } from "@shared/components/ui/bcp-loading/bcp-loading.component";
import { DynamicLoadingProps } from "@shared/models/dynamic-component.model";
import { DynamicLoadingData, DynamicLoadingKey } from "@shared/constants/dynamic-loading.constants";

@Injectable({ providedIn: 'root' })
export class LoaderService {

  constructor(private appVcr: AppVCR) { }

  show(key: DynamicLoadingKey = 'BCP'): void {
    const componentRef = this.appVcr.viewContainerRef
      .createComponent(BCPLoadingComponent);
    const instanceComponent = componentRef.instance;
    const props = this.getProps(key);
    instanceComponent.setProperties(props);
  }

  close(): void {
    if (this.appVcr.viewContainerRef.length)
      this.appVcr.viewContainerRef.clear()
  }

  getProps(keyProp: DynamicLoadingKey): DynamicLoadingProps {
    return DynamicLoadingData[keyProp];
  }
}
