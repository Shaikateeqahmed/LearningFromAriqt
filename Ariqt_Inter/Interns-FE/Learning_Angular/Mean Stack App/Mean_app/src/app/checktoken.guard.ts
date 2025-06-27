import { CanActivateFn } from '@angular/router';

export const checktokenGuard: CanActivateFn = (route, state) => {
  let token = localStorage.getItem('token');
  if(token){
    return true;
  }else{
    return false
  }
};
