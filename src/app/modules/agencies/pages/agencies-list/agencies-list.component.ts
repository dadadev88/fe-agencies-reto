import { Component, OnInit } from '@angular/core';
import { LoaderService } from '@shared/services/loader.service';
import { AgenciesController } from '../../controllers/agencies.controller';

@Component({
  selector: 'agencies',
  templateUrl: './agencies-list.component.html',
  styleUrls: ['./agencies-list.component.css']
})
export class AgenciesListPageComponent implements OnInit {

  constructor(
    public controller: AgenciesController,
    public loader: LoaderService
  ) { }

  ngOnInit() {
    this.controller.onInit();
  }

}
