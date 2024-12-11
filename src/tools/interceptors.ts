import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment';
import { inject } from '@angular/core';
import { catchError, finalize, throwError } from 'rxjs';
import { NavigationService } from '../services/navigation/navigation.service';
//import {AuthService} from '../auth/auth.service';


export const navInterceptor: HttpInterceptorFn = (req, next) => {
  const service = inject(NavigationService)
  service.navigating = true
  return next(req).pipe(finalize(() => service.navigating = false))
}

// export const cursorInterceptor: HttpInterceptorFn = (req, next) => {
//   document.body.classList.add("cursor-wait")
//   return next(req).pipe(finalize(() => document.body.classList.remove("cursor-wait")))
// }

/*

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).token;
  if (req.url.startsWith(environment.API_URL) && token) {
    req = req.clone({
      setHeaders: {
        Authorization: "Bearer " + token
      }
    })
  }
  return next(req)
}

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  if (req.url.startsWith(environment.API_URL)) {
    return next(req).pipe(catchError(err => {
      if(err.status === 401) {
        auth.logout()
      }
      // À garder dans un catch error pour permettre une gestion ultérieure de celle-ci
      return throwError(() => err)
    }))
  }
  return next(req)
}
*/
