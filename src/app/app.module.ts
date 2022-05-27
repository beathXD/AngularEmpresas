import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { EmpresasComponent } from './componentes/empresas/empresas.component';
import { MenuvarComponent } from './componentes/menuvar/menuvar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { SucursalesComponent } from './componentes/sucursales/sucursales.component';
import { SucursalIndiComponent } from './componentes/sucursal-indi/sucursal-indi.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    EmpresasComponent,
    MenuvarComponent,
    InicioComponent,
    ProductosComponent,
    SucursalesComponent,
    SucursalIndiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
