import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const adminGuard: CanMatchFn = (route, segments) => {

  console.log("route", route)
  console.log("segments", segments)

  const router = inject(Router)

  if (false)
    return router.createUrlTree(["/"]);


  return true;
};


// Role d'un guard:
// doit retourner obligatoirement un des trois éléments suivants :
// -> true : autoriser l'accès
// -> false : refuser l'accès
// Un 'urlTree': pour rediriger l'utilisateur
