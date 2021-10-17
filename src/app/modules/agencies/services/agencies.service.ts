import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Agency } from '../interfaces/agency-list-item.interface';

@Injectable()
export class AgenciesService {

	private readonly pathDataSource: string = environment.baseURLAssets;

	constructor(private httpClient: HttpClient) {}

	getAllFromDataFile(): Observable<Agency[]> {
		return this.httpClient.get<Agency[]>(this.pathDataSource + '/agencies.json').pipe(
			delay(3000)
		);
	}
}
