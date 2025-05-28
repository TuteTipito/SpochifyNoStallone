import { platformBrowser, provideClientHydration, withEventReplay, BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { InjectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';
import { AppRoutingModule } from './app/app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, RouterModule),
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
