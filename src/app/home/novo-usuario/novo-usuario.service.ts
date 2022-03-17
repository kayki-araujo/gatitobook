import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  private url = 'http://localhost:3000/user';

  constructor(private httpClient: HttpClient) {}

  cadastraNovoUsuario(novoUsuario: NovoUsuario) {
    return this.httpClient.post(`${this.url}/signup`, novoUsuario);
  }

  verificaUsuarioExistente(nomeDoUsuario: string) {
    return this.httpClient.get(`${this.url}/exists/${nomeDoUsuario}`);
  }
}
