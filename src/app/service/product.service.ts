import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  basUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public getCategory(): Observable<any> {
    return this.http.get(this.basUrl + '/category');
  }

  public getSubCategory(): Observable<any> {
    return this.http.get(this.basUrl + '/category/subCategoryProducts/{subCategoryid}');
  }

  public getSubMainCategory(): Observable<any> {
    return this.http.get(this.basUrl + '/category/mainSubCategoryProducts/{mainSubCategoryId}');
  }

  // public getFilter(): Observable<any> {
  //   return this.http.get(this.basUrl + '/category/mainSubCategoryProducts/{mainSubCategoryId}');
  // }
  public getNewArrival(): Observable<any> {
    return this.http.get(this.basUrl + '/product/newArrivals');
  }

  public getProductView(): Observable<any> {
    return this.http.get(this.basUrl + ' /product/{productId}');
  }

  public getSearch(): Observable<any> {
    return this.http.get(this.basUrl + '/product/search');
  }

  public getCart(): Observable<any> {
    return this.http.get(this.basUrl + '/cart');
  }

  public postCart(): Observable<any> {
    return this.http.get(this.basUrl + '/cart');
  }

  public getWishlist(): Observable<any> {
    return this.http.get(this.basUrl + '/wishlist/{productId}');
  }

  public postWishlist(): Observable<any> {
    return this.http.get(this.basUrl + '/wishlist');
  }

  // public postCheckOut(): Observable<any> {
  //   return this.http.get(this.basUrl + '/category/mainSubCategoryProducts/{mainSubCategoryId}');
  // }
  // public getCart(): Observable<any> {
  //   return this.http.get(this.basUrl + '/category/mainSubCategoryProducts/{mainSubCategoryId}');
  // }

}
