import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  private baseUrl = environment.fakeLogin


  login(credential: { login: string, password: string }): Observable<{ login: string, password: string, token: string }> {
    return this.fakeLogin(credential).pipe(tap(resp => {
      console.log("resp", resp)
      localStorage.setItem('token', resp.token);
      this.router.navigate(['/admin'])
    }))
  }







  // A remplacer par un appel à un backend, c'est le backend qui doit renvoyer le token
  private fakeLogin({ login, password }: { login: string, password: string }): Observable<{ login: string, password: string, token: string }> {
    return this.http.get<{ login: string, password: string, token: string }>(this.baseUrl).pipe(
      map(() => {
        if (login === 'admin@admin' && password === 'admin') {
          const token = "MON TOKEN"
          return { login, password, token }
        }
        else {
          throw new Error("Identifiant ou mdp incorrect")
        }
      }
      )
    )
  }



}
