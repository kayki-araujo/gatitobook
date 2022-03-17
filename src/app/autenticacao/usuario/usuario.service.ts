import { Usuario } from './usuario';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>({});

  get usuario() {
    return this.usuarioSubject.asObservable();
  }

  constructor(private tokenService: TokenService) {
    if (tokenService.possuiToken()) {
      this.decodificaJWT();
    }
  }

  private decodificaJWT() {
    const token = this.tokenService.token;
    const usuario = jwtDecode<Usuario>(token);
    this.usuarioSubject.next(usuario);
  }

  salvarToken(token: string) {
    this.tokenService.token = token;
    this.decodificaJWT();
  }

  logout() {
    this.tokenService.excluirToken();
    this.usuarioSubject.next({});
  }

  estaLogado() {
    return this.tokenService.possuiToken();
  }
}
