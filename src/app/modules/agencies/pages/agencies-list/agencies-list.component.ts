import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoaderService } from '@shared/services/loader.service';
import { AgenciesController } from '../../controllers/agencies.controller';
import { ModalServiceImp } from '@shared/services/modal.service';
import { Modals } from '@shared/components/ui/modals/modals';
import { NumberService } from '@shared/services/number.service';
import { catchError, debounce, filter, map, take, takeLast, takeUntil, tap } from 'rxjs/operators';
import { of, interval, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'bcp-agencies-list',
  templateUrl: './agencies-list.component.html',
  styleUrls: ['./agencies-list.component.css'],
  providers: [NumberService]
})
export class AgenciesListPageComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();
  private numberSubs = new Subscription();

  constructor(
    public controller: AgenciesController,
    public loader: LoaderService,
    public modalService: ModalServiceImp,
    public numberService: NumberService
  ) { }

  ngOnDestroy(): void {
    // this.destroy$.next();
    this.numberSubs.unsubscribe();
  }

  ngOnInit() {
    this.controller.onInit();

    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
      .pipe(
        tap((number) => console.log('Number before filter', number)),
        map(function (number) {
          return number * 2;
        }),
      )
      .subscribe((numbers) => {
        console.log(numbers);
      });

    interval(1000)
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe({
        next: (number) => {
          console.log('Number', number);
        }
      });


    this.numberSubs = interval(1000)
      .subscribe((number) => {
        console.log('Number', number);
      });
  }

  openModal(): void {
    this.modalService.open(
      Modals.MyModalOne,
      {
        title: 'Términos y Condiciones',
        description: 'Promoción válida a nivel nacional vigente del 09 de noviembre al 04 de diciembre. Esta campaña es desarrollada por el Banco de Crédito del Perú (BCP).',
        onClose: this.onCloseModalOne
      }
    );
  }

  private onCloseModalOne(isAgree: boolean): void {
    console.log(isAgree ? 'Gracias por aceptar' : 'Debe aceptar los TyC');
  }

}
