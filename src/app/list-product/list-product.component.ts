import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/from';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  productsObservable: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.productsObservable = this.http.get('/assets/json/products.json')
      .map((data: any) => data.products);
  }

  filtrar() {
    this.productsObservable = this.productsObservable.map((data: any) =>
      data.filter((product) => product.name.indexOf('e') >= 0)
    );
  }

}
