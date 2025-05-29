import { inject } from '@angular/core';
import { HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

export const authorizationInterceptor = (request: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const cookieService = inject(CookieService)

  try {
    const token = cookieService.get('token')
    let newRequest = request
    newRequest = request.clone(
      {
        setHeaders: {
          authorization: `Bearer ${token}`,
          CUSTOM_HEADER: 'HOLA'
        }
      }
    )

    return next(newRequest);

  } catch (e) {
    console.log('🔴🔴🔴 Ojito error', e)
     return next(request);
  }
}
/* export const injectSessionInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
}; */
