import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(
    private http: HttpClient,
  ) {
  }
  //
  // getAllResults() {
  //   return this.http.get<any>(
  //     `${environment.host}/merchant/`,
  //   )
  // }
  //
  // addNewResult() {
  //   return this.http.post<any>(
  //     `${environment.host}/init`,
  //     {}
  //   )
  // }

}
