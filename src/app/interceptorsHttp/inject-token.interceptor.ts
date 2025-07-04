import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const injectTokenInterceptor: HttpInterceptorFn = (req, next) => {
  //  req -> la requête HTTP intercepté
  console.log("requête intercepté !", req)

  const router = inject(Router);

  const cloneReq = req.clone(
    { headers: req.headers.set('Authorization', 'Bearer ' + "MyToken") }
  )


  // next la méthode que l'on doit obligatoirement appelé
  // pour passer la requête au suivant
  return next(cloneReq)
    // .pipe utilisé pour traitement générique des erreurs
    .pipe(
      catchError((error: HttpErrorResponse) => {

        // Si l'erreur est 401 ou 403, on redirige (adapter lorsqu'on aura la page de login)
        if (error.status === 401 || 403) {
          router.navigate(['/']);
        }

        return throwError(() => error)
      })

    )
};
