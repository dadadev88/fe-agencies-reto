import { Component, Input } from '@angular/core';
import AgenciesState from 'src/app/modules/agencies/services/agencies-state.service';

@Component({
  selector: 'bcp-header',
  templateUrl: './bcp-header.component.html',
  styleUrls: ['./bcp-header.component.css']
})
export class BCPHeaderComponent {

  @Input()
  title!: string;
  @Input()
  showInput: boolean = true;

  constructor(private state: AgenciesState) { }

  keyupInputSearch(value: string) {
    this.state.setAgencyToSearch(value);
  }

}
