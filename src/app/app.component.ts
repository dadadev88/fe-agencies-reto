import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponentService } from '@shared/services/dynamic-component.service';

@Component({
  selector: 'root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {

  @ViewChild('outsideContainer', { read: ViewContainerRef })
  private dynamicContainer!: ViewContainerRef;

  constructor(private dynamicService: DynamicComponentService) { }

  ngAfterViewInit(): void {
    this.dynamicService.container = this.dynamicContainer;
  }
}
