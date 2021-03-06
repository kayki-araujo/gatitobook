import { environment } from './../../../environments/environment';
import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private httpClient: HttpClient) {}

  cadastraNovoUsuario(novoUsuario: NovoUsuario) {
    return this.httpClient.post(`${API}/user/signup`, novoUsuario);
  }

  verificaUsuarioExistente(nomeDoUsuario: string) {
    return this.httpClient.get(`${API}/user/exists/${nomeDoUsuario}`);
  }
}
