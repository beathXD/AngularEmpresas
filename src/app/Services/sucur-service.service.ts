import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sucursales } from '../models/sucursales.model';

@Injectable({
    providedIn: 'root'
})
export class SucurServiceService {
    


    public url: String = 'http://localhost:3000/api';
    public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
    public token;
    public identidad;


    constructor(public _http: HttpClient) { }

    obtenerSucursal(token): Observable<any> {
        let headersToken = this.headersVariable.set('Authorization', token)

        return this._http.get(this.url + '/obtenerSucursal', { headers: headersToken });
    }
    agregarSucursal(modeloSucursal: Sucursales, token): Observable<any> {
        let headersToken = this.headersVariable.set('Authorization', token);

        let parametros = JSON.stringify(modeloSucursal);

        return this._http.post(this.url + '/agregarSucursal', parametros, { headers: headersToken })
    }
    eliminarSucursal(idSucursal, token) {
        let headersToken = this.headersVariable.set('Authorization', token)

        return this._http.delete(this.url + '/eliminarsucursal/' + idSucursal, { headers: headersToken })
    }
    editarSucursal(modeloSucursal: Sucursales, token) {
        let headersToken = this.headersVariable.set('Authorization', token)

        let parametro = JSON.stringify(modeloSucursal);

        return this._http.put(this.url + '/editarsucursal/' + modeloSucursal._id, parametro, { headers: headersToken })


    }
    obtenerSucursalId(idSucursal, token): Observable<any> {
        let headersToken = this.headersVariable.set('Authorization', token)

        return this._http.get(this.url + '/obtenerSucursalId/' + idSucursal, { headers: headersToken });
    }
}
