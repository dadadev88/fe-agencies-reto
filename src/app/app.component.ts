import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { AppVCR } from '@shared/services/app-vcr.service';

@Component({
  selector: 'agencies-reto-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {

  @ViewChild('appSiblingContainer', { read: ViewContainerRef })
  appSiblingContainer!: ViewContainerRef;

  constructor(
    private readonly appVcr: AppVCR,
  ) {
    console.log('AppComponent constructor');
  }

  ngAfterViewInit(): void {
    this.appVcr.setContainer(this.appSiblingContainer);
  }
}
