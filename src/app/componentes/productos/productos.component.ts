import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/models/productos.model';
import { EmpreServiceService } from 'src/app/Services/empre-service.service';
import { UsuarioServiceService } from 'src/app/Services/usuario-service.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  public productosModelGet: any[];
  public productosModelPost: Productos;
  public token;

  constructor(private _empresasService: EmpreServiceService,
    private _usuarioService: UsuarioServiceService) {
      this.token = this._usuarioService.getToken();
      this.productosModelPost = new Productos(
        "",
        "",
        0,
        0
      )
     }

  ngOnInit(): void {
    this.getEmpresa()
  }

  getEmpresa() {
    this._empresasService.obtenerProductos(this.token).subscribe(
      (response) => {
        console.log(response.producto);
        this.productosModelGet = response.producto;
      },
      (err) => {
        console.log(<any>err)
      }
    )
  }
  postEmpresa(){
    this._empresasService.agregarProducto(this.productosModelPost, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getEmpresa();
        this.productosModelPost.nombreProducto = "";
        this.productosModelPost.cantidad = 0
        this.productosModelPost.precio = 0
      },
      (err) => {
        console.log(<any>err)
      }
    )
  }

}
