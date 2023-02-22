import { Injectable } from '@angular/core';
import { Cliente } from './models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes: Array<Cliente> = [
    {nombre: 'Iberdrola', cif: 'A12345678', localidad: 'Bilbao'},
    {nombre: 'Jazztel', cif: 'A1235789', localidad: 'Madrid'},
    {nombre: 'La Caixa', cif: 'A14225639', localidad: 'Barcelona'}

  ]

  constructor() { }

  getClientes(): Array<Cliente> {
    return this.clientes;
  }

  setCliente(cliente: Cliente){
    this.clientes.push(cliente);
  }
}
