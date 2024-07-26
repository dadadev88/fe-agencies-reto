import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponentService } from '@shared/services/dynamic-component.service';

@Component({
  selector: 'root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {

  constructor(
    private dynamicService: DynamicComponentService,
    private vcr: ViewContainerRef
  ) { }

  ngAfterViewInit(): void {
    this.dynamicService.setContainer(this.vcr);
  }
}
