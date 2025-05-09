import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = environment.api;

  constructor(private httClient: HttpClient, private cookie:CookieService) { }

  sendCredential(email: string, password: string): Observable<any> {
    const body = {
      email,
      password
    }
    return this.httClient.post(`${this.URL}/auth/login`, body)
/*     .pipe(
      tap((responseOk: any) => {
        const { tokenSession, data } = responseOk
        console.log('Sesion iniciada correcta', responseOk);
        this.cookie.set('token_service', tokenSession, 4, '/')
      })
    ) */
  }
}
