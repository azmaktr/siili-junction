import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {
  isAuthenticated(){
    return !!localStorage.getItem("token");
  }
  login(email, password){
    
  }
  constructor() { }

}
