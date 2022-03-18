import { environment } from './../../environments/environment';
import { TokenService } from './../autenticacao/token.service';
import { Animais } from './animais';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  listaDoUsuario(nomeDoUsuario: string) {
    const token = this.tokenService.token;
    const headers = new HttpHeaders().append('x-acces-token', token);
    return this.httpClient.get<Animais>(`${API}/${nomeDoUsuario}/photos`, {
      headers,
    });
  }
}
