
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresas } from '../models/empresa.model';
import { Productos } from '../models/productos.model';
@Injectable({
  providedIn: 'root'
})
export class EmpreServiceService {


  public url : String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token;
  public identidad;


  constructor(public _http: HttpClient) { }


  obtenerEmpresas(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.get(this.url + '/obtenerempresa', {headers: headersToken });
  }
  agregarEmpresas(modeloEmpresa: Empresas, token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token);

    let parametros = JSON.stringify(modeloEmpresa);

    return this._http.post(this.url + '/agregarEmpresa', parametros, {headers: headersToken })
  }
  eliminarEmpresa(idEmpresa, token){
    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.delete(this.url + '/eliminarempresa/' + idEmpresa, { headers: headersToken})
  }
  editarEmpresa(modeloEmpresa: Empresas,token){
    let headersToken = this.headersVariable.set('Authorization', token)

    let parametro = JSON.stringify(modeloEmpresa);

    return this._http.put(this.url + '/editarempresa/' + modeloEmpresa._id, parametro, {headers: headersToken} )


  }
  obtenerEmpresasId(idEmpresa ,token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.get(this.url + '/obtenerEmpresaId/' + idEmpresa, {headers: headersToken });
  }
  agregarProducto(modeloEmpresa: Productos, token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token);

    let parametros = JSON.stringify(modeloEmpresa);

    return this._http.post(this.url + '/agregarProducto', parametros, {headers: headersToken })
  }
  obtenerProductos(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.get(this.url + '/obtenerProductos', {headers: headersToken });
  }
}
