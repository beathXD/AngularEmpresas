export class Sucursales {
  constructor(
      public idAdmin: String,
      public _id: String,
      public nombreSucursal: String,
      public ubicacionSucursal: String,
      public productosEmpresas: [{
          nombreProducto: String,
          cantidad: Number
      }]) { }
}
