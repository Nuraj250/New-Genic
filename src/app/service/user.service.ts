import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'})

export class UserService {
  basUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  // @ts-ignore
  public postSignUp(): Observable<any> {
  }

  // @ts-ignore
  public postSignIn(): Observable<any> {
  }

  // @ts-ignore
  public patchUpdateDetails(): Observable<any> {
  }

  // @ts-ignore
  public patchUpdateProfilePicture(): Observable<any> {
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
}
