import { Component, OnInit } from '@angular/core';
import { EmpreServiceService } from 'src/app/Services/empre-service.service';
import { UsuarioServiceService } from 'src/app/Services/usuario-service.service';
import { Empresas } from 'src/app/models/empresa.model';
@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
  providers: [EmpreServiceService]
})
export class EmpresasComponent implements OnInit {

  public token;
  public empresasModelGet: any[];
  public empresaModelPost: Empresas;
  public empresaModelGetId: Empresas;

  constructor(private _empresasService: EmpreServiceService,
    private _usuarioService: UsuarioServiceService) {
    this.token = this._usuarioService.getToken();
    this.empresaModelPost = new Empresas(
      '',
      '',
      ''
      )
    this.empresaModelGetId = new Empresas(
      '',
      '',
      ''
    )

  }

  ngOnInit(): void {
    this.getEmpresa();
  }

  getEmpresa() {
    this._empresasService.obtenerEmpresas(this.token).subscribe(
      (response) => {
        console.log(response.empresa);
        this.empresasModelGet = response.empresa;
      },
      (err) => {
        console.log(<any>err)
      }
    )
  }
  postEmpresa(){
    this._empresasService.agregarEmpresas(this.empresaModelPost, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getEmpresa();
        this.empresaModelPost.nombreEmpresa = "";
        this.empresaModelPost.idAdmin = this.token.sub},
      (err) => {
        console.log(<any>err)
      }
    )
  }
  deleteEmpresa(id) {
    this._empresasService.eliminarEmpresa(id, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getEmpresa()

      }
    )
  }
  putProductos() {
    this._empresasService.editarEmpresa(this.empresaModelGetId, this.token).subscribe(

      (response) => {
        console.log(response);
        this.getEmpresa();
      },
      (error) => {

      }

    )
  }
  getEmpresaId(idEmpresa){
    this._empresasService.obtenerEmpresasId(idEmpresa, this.token).subscribe(
      (response)=>{
        console.log(response);
        this.empresaModelGetId = response.empresa;
        console.log(this.empresaModelGetId.nombreEmpresa);

      },
      (error)=>{

      }
    )
  }

}
