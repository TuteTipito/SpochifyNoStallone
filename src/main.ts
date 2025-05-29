import { provideClientHydration, withEventReplay, BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authorizationInterceptor } from '@core/interceptors/inject-session.interceptor';
import { provideRouter, RouterModule, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { appRoutes } from './app/app.routes';

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(appRoutes, withComponentInputBinding()),
        importProvidersFrom(BrowserModule, RouterModule),
        provideClientHydration(withEventReplay()),
        provideHttpClient(withInterceptors([authorizationInterceptor]))
    ]
})
  .catch(err => console.error(err));
