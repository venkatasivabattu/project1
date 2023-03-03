import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionManagementService {

  constructor() { }
  set(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
    
  }
  get(key: string): any {
    return JSON.parse(sessionStorage.getItem(key));
  }

  remove(key: string): void {
    sessionStorage.removeItem(key);
  }
}
