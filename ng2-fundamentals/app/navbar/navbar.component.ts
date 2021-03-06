import { Component } from '@angular/core'
import { AuthService } from "../user/auth.service";


@Component({
   selector: 'nav-bar',
   templateUrl: 'app/navbar/navbar.component.html',
   styles: [
       `.nav.navbar-nav {font-size: 25px:}
       #searchForm {margin-right: 100px;}
       @media (max-width: 1200px) { #searchForm {display:none}}
       li > a.active { color: #F97924; }`
   ]
})

export class NavBarComponent {
    authService: AuthService;

    constructor(auth: AuthService){
        this.authService = auth;
    }
}