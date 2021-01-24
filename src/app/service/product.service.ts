import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Product} from '../storage/class/Product';
import {Category} from '../storage/class/Category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  basUrl = environment.baseUrl;
  private _id: any;

  constructor(private http: HttpClient) {
  }

  public getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.basUrl + '/category');
  }

  public getSubCategory(): Observable<Category[]> {
    return this.http.get<Product[]> (this.basUrl + '/category/subCategoryProducts/{subCategoryid}');
  }

  public getSubMainCategory(): Observable<Category[]>{
    return this.http.get<Category[]>(this.basUrl + '/category/mainSubCategoryProducts/{mainSubCategoryId}');
  }

  // public getFilter(): Observable<any> {
  //   return this.http.get(this.basUrl + '/category/mainSubCategoryProducts/{mainSubCategoryId}');
  // }
  public getNewArrival(): Observable<Product[]> {
    return this.http.get<Product[]>(this.basUrl + '/product/newArrivals');
  }

  public getProductView(id: string | undefined): Observable<Product[]> {
    this._id = id;
    return this.http.get<Product[]> (this.basUrl + ' /product/{productId}');
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
