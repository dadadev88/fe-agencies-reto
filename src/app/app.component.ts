import { Component } from '@angular/core';
import { LoaderService } from '@shared/services/loader.service';

@Component({
  selector: 'root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(public loader: LoaderService) { }
}
