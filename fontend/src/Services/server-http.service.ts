import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerHttpService {
  getUsers() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
