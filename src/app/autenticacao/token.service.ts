import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  get token() {
    return localStorage.getItem(KEY) ?? '';
  }

  set token(newToken: string) {
    localStorage.setItem(KEY, newToken);
  }

  excluirToken() {
    localStorage.setItem(KEY, '');
  }

  possuiToken() {
    return !!this.token;
  }
}
