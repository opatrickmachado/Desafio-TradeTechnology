import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authorized: boolean = false

  constructor(private http:HttpClient) { }

  login<T>(key: string):Observable<HttpResponse<T>>{

    const headers = new HttpHeaders().set('x-apisports-key',key)

    return this.http.get<T>(`${environment.urlApi}/status`, {headers, observe: 'response'})
  }

  autorizationCheck(value: boolean){
    this.authorized = value
  }

}
