import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loading = new BehaviorSubject<boolean | undefined>(false);

  constructor() { }

  setLoading(loading: boolean) {
    this.loading.next(loading);
  }

  getLoading() {
    return this.loading.asObservable();
  }
}
