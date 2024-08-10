import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Agency } from '../../interfaces/agency-list-item.interface';
import AgenciesState from '../../services/agencies-state.service';

@Component({
  selector: 'bcp-agencies-list-items',
  templateUrl: './agency-list-item.component.html',
  styleUrls: ['./agency-list-item.component.css']
})
export class AgencyListItemComponent implements OnInit {
  defaultImg: string = 'assets/images/agency.svg';
  agencyToSearch: string = '';
  agencyToSearchSubs!: Subscription;

  @Input()
  agencies: Agency[] = [];
  @Input()
  title?: string;

  @Output()
  toDetail = new EventEmitter<Agency>();

  constructor(private state: AgenciesState) { }

  ngOnInit(): void {
    this.agencyToSearchSubs = this.state.agencyToSearch
      .pipe(debounceTime(100))
      .subscribe(value => {
        this.agencyToSearch = value;
      });
  }

  goToDetail(agency: Agency) {
    this.toDetail.emit(agency);
  }

  ngOnDestroy(): void {
    this.agencyToSearchSubs.unsubscribe();
  }
}
