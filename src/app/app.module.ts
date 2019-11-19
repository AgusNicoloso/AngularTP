import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ListitemsComponent } from './components/listitems/listitems.component';
import { ProductComponent } from './components/product/product.component';
import { PaginadorComponent } from './components/paginador/paginador.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { RegisterComponent } from './components/register/register.component';
import { UserCredentials } from './models/user-credentials';
import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    ListitemsComponent,
    ProductComponent,
    PaginadorComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
  },
  UserCredentials, UserService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
