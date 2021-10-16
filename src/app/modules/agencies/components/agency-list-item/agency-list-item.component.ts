import { Component, Input } from '@angular/core';
import { AgencyListItem } from './agency-list-item.model';

@Component({
	selector: 'app-agency-list-item',
	templateUrl: './agency-list-item.component.html',
	styleUrls: ['./agency-list-item.component.css']
})
export class AgencyListItemComponent {

	defaultImg: string = 'assets/images/agency.svg';

	@Input()
	agencies: AgencyListItem[] = [
		{
			agencia: 'Agencia Matellini', 
			direccion: 'Av. Matellini 912', 
			departamento: 'Lima', 
			img: 'assets/images/agency.svg'
		},
		{
			agencia: "Punchana",
			distrito: "Punchana",
			provincia: "Maynas",
			departamento: "Loreto",
			direccion: "Av. La Marina N° 944",
			lat: -73.240647,
			lon: -3.731367
		},
		{
			agencia: "Conquistadores",
			distrito: "San Isidro",
			provincia: "Lima",
			departamento: "Lima",
			direccion: "Av. Conquistadores 968",
			lat: -77.03735314,
			lon: -12.10568371
		}
	];

	@Input()
	title?: string;

}
