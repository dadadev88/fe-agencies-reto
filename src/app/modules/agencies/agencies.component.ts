import { Component } from '@angular/core';
import { LoaderService } from '@shared/services/loader.service';

@Component({
  selector: 'agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent {

  constructor(public loader: LoaderService) { }
}
