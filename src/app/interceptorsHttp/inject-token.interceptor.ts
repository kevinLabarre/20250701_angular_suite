import { isPlatformBrowser } from '@angular/common';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const injectTokenInterceptor: HttpInterceptorFn = (req, next) => {
  //  req -> la requête HTTP intercepté
  console.log("requête intercepté !", req)

  const router = inject(Router);

  const platform = inject(PLATFORM_ID);

  if (isPlatformBrowser(platform)) {
    const token = localStorage.getItem('token')
    if (token) {
      const cloneReq = req.clone(
        { headers: req.headers.set('Authorization', 'Bearer ' + token) }
      )
      return next(cloneReq)
    }
  }


  // next la méthode que l'on doit obligatoirement appelé
  // pour passer la requête au suivant
  return next(req)
    // .pipe utilisé pour traitement générique des erreurs
    .pipe(
      catchError((error: HttpErrorResponse) => {

        // Si l'erreur est 401 ou 403, on redirige (adapter lorsqu'on aura la page de login)
        if (error.status === 401 || 403) {
          router.navigate(['/connexion']);
        }

        return throwError(() => error)
      })

    )
};
