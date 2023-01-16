import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public isLoading: boolean = true;

  open(): void {
    this.isLoading = true;
  }

  close(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, this.getRamdonTime());
  }

  private getRamdonTime(): number {
    return Math.random() * 3600;
  }
}
