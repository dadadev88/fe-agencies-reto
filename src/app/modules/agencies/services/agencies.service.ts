import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Agency } from '../interfaces/agency-list-item.interface';

@Injectable()
export class AgenciesService {

	private readonly pathDataSource = 'assets/data/agencies.json';

	constructor(private httpClient: HttpClient) {}

	getAllFromDataFile() {
		return this.httpClient.get<Agency[]>(this.pathDataSource).pipe(
			delay(2000)
		);
	}
}
