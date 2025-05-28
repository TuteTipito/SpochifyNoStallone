import { platformBrowser, provideClientHydration, withEventReplay, BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { InjectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';
import { provideRouter, RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { appRoutes } from './app/app.routes';

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(appRoutes),
        importProvidersFrom(BrowserModule, RouterModule),
        provideClientHydration(withEventReplay()),
        provideHttpClient(withInterceptorsFromDi()),
        CookieService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InjectSessionInterceptor,
            multi: true
        }
    ]
})
  .catch(err => console.error(err));
