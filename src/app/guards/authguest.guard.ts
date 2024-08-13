import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authguestGuard: CanActivateFn = (route, state) => {

  const routerr=inject(Router);

  if(localStorage.getItem("jwt")==null||localStorage.getItem("jwt")==""){
    return true;
  }

  const authService=inject(AuthService);
  
  return authService.autentificar().subscribe((data:any)=>{
    if(data==false){
      return true;
    }
    else{
      routerr.navigateByUrl("/home");
      return false;
    }
  },
  (error: any) => {
    return true;
  })
  
};
