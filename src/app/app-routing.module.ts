import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasComponent } from './componentes/empresas/empresas.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { SucursalIndiComponent } from './componentes/sucursal-indi/sucursal-indi.component';
import { SucursalesComponent } from './componentes/sucursales/sucursales.component';

const routes: Routes = [
  {path: "inicio", component: LoginComponent},
  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroComponent},
  {path: "empresas", component: EmpresasComponent},
  {path: "productos", component: ProductosComponent},
  {path: "sucursales", component: SucursalesComponent},
  {path: "sucursalesind", component: SucursalIndiComponent},
  {path: "**", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
