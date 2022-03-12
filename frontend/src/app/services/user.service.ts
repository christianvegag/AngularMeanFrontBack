import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private env: string;
  constructor(private _http: HttpClient) {
    this.env = environment.APP_URL;
  }

  registerUser(user: any) {
    return this._http.post<any>(this.env + 'user/register', user);
  }
  login(user: any) {
    return this._http.post<any>(this.env + 'user/login', user);
  }

  loggedIn() {//devuelve true o false
    return !!localStorage.getItem('token'); //true o false
  }

  getToken() {// devuelve el token
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
  }
}
