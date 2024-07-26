import { Component } from '@angular/core';
import { DynamicLoadingComponent, DynamicLoadingProps } from '@shared/models/dynamic-component.model';

@Component({
  selector: 'bcp-loading',
  templateUrl: './bcp-loading.component.html',
  styleUrls: ['./bcp-loading.component.css']
})
export class BCPLoadingComponent implements DynamicLoadingComponent {

  public message: string = '';
  public image: string = 'bcp-logo.png';

  setProperties(props: DynamicLoadingProps): void {
    this.message = props.message;
    this.image = props.image ?? this.image;
  }
}
