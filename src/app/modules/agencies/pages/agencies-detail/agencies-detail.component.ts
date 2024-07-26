import { Component, OnInit } from '@angular/core';
import { AgenciesController } from '../../controllers/agencies.controller';

@Component({
  selector: 'agencies-detail-page',
  templateUrl: './agencies-detail.component.html'
})
export class AgenciesDetailPageComponent implements OnInit {

  constructor(
    public controller: AgenciesController
  ) { }

  ngOnInit(): void {
    this.controller.onInitDetail();
  }

}
