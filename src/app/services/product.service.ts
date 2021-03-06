import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  auth = 'Bearer ' + localStorage.getItem('token');
  private url = 'https://utn2019-avanzada2-tp9.herokuapp.com/';
  page = 1;
  size = 10;
  orderBy = 'productId';
  orderMethod = 'ASC';
  constructor(private httpClient : HttpClient) { }

  getAll(action?: boolean, orderBy?: string, orderMethod?: boolean): Observable<any> {
    let observable;
    this.page = (orderBy ? this.page : (action ? this.page += 1 : this.page -= 1));
    this.orderBy = (orderBy ? this.orderBy = orderBy : this.orderBy);
    this.orderMethod = orderMethod ? 'ASC' : 'DESC';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    observable = this.httpClient.get(this.url + 'api/products?direction=' + this.orderMethod + '&orderBy=' + this.orderBy + '&page=' + this.page + '&size=' + this.size, httpOptions);
    return observable;
  }
}
