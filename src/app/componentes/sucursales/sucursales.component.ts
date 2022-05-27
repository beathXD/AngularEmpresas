import { Component, OnInit } from '@angular/core';
import { SucurServiceService} from 'src/app/Services/sucursales-service.service';
import { UsuarioServiceService } from 'src/app/Services/usuario-service.service';
import { Sucursales } from 'src/app/models/sucursales.model';
@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss'],
  providers: [SucurServiceService]
})
export class SucursalesComponent implements OnInit {

  public token;
  public sucursalesModelGet: any[];
  public sucursalesModelPost: Sucursales;
  public sucursalesModelGetId: Sucursales;

  constructor(private _sucursalesService: SucurServiceService,
    private _usuarioService: UsuarioServiceService) {
    this.token = this._usuarioService.getToken();
    this.sucursalesModelPost = new Sucursales(
      '',
      '',
      '',
      '',
      [{
        nombreProducto: '',
        cantidad: 0
      }],

      )
    this.sucursalesModelGetId = new Sucursales(
      '',
      '',
      '',
      '',
      [{
        nombreProducto: '',
        cantidad: 0
      }]

    )

  }

  ngOnInit(): void {
    this.getSucursal();
  }

  getSucursal() {
    this._sucursalesService.obtenerSucursal(this.token).subscribe(
      (response) => {
        console.log(response.sucursal);
        this.sucursalesModelGet = response.sucursal;
      },
      (err) => {
        console.log(<any>err)
      }
    )
  }

  postSucursales(){
    this._sucursalesService.agregarSucursal(this.sucursalesModelPost, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getSucursal();
        this.sucursalesModelPost.nombreSucursal = "";
        this.sucursalesModelPost.idAdmin = this.token.sub
        this.sucursalesModelPost.ubicacionSucursal = "";
      },
      (err) => {
        console.log(<any>err)
      }
    )
  }
  deleteSucursal(id) {
    this._sucursalesService.eliminarSucursal(id, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getSucursal()

      }
    )
  }
  putProductos() {
    this._sucursalesService.editarSucursal(this.sucursalesModelGetId, this.token).subscribe(

      (response) => {
        console.log(response);
        this.getSucursal();
      },
      (error) => {

      }

    )
  }
  getSucursalId(idSucursal){
    this._sucursalesService.obtenerSucursalId(idSucursal, this.token).subscribe(
      (response)=>{
        this.sucursalesModelGetId = response.sucursal;
        console.log(this.sucursalesModelGetId._id);

      },
      (error)=>{

      }
    )
  }

}
