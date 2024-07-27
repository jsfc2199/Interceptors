import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { InterceptorService } from './interceptors/interceptor.service';
import { userInt, userInterceptor } from './interceptors/interceptorA18.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClientModule
  ],
  providers: [
    //!Nota: sise quiere usar el withInterceptorsFromDi se usa como se hizo al principio con el objeto de provide HTTP_INTERCEPTORS y use Class
    //! Para más información https://angular.dev/guide/http/interceptors
    // provideHttpClient(withInterceptorsFromDi()),
    provideHttpClient(withInterceptors([/*userInterceptor*/ userInt])),

    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: InterceptorService,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
