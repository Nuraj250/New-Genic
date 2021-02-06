import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {J} from '@angular/cdk/keycodes';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  basUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public postSignIn(user: {}): Observable<any> {
    // @ts-ignore
    const token = JSON.parse(sessionStorage.getItem('token'));
    return this.http.post(this.basUrl + '/login', user, {headers: {Authentication: token}});
  }

  public getUsers(): Observable<any> {
    return this.http.get(this.basUrl + '/x');
  }

  // public getUserById(id: number): Observable<any> {
  //   return this.http.get(this.basUrl + '/x1/' + id);
  // }


  public getAllDetails():Observable<any> {
   return this.http.get(this.basUrl+'/category')
  }

  // @ts-ignore
  public getViewAllOrder(): Observable<any> {
  }

  // @ts-ignore
  public postFeedback(): Observable<any> {
  }

  // @ts-ignore
  public getFeedback(): Observable<any> {
  }

  // @ts-ignore
  public patchUpdateDetails(): Observable<any> {
  }

  // @ts-ignore
  public patchUpdateProfilePicture(): Observable<any> {
  }

  // @ts-ignore
  public postSignUp(): Observable<any> {
  }
}
