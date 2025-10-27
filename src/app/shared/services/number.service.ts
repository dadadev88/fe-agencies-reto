import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable()
export class NumberService {
  // private numbers = of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  constructor() { }

  public numbers() {
    return of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  }
}
