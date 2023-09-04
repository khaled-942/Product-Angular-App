import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loaderBehavior = new BehaviorSubject(false);
  loaderObservable = this.loaderBehavior.asObservable();
  constructor() {}

  setLoaderState(newState: boolean) {
    this.loaderBehavior.next(newState);
  }
}
