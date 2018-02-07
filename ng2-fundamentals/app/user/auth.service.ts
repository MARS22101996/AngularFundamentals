import { Injectable } from '@angular/core'
import { IUser } from './user.model'
import { Router } from "@angular/router"

@Injectable()
export class AuthService {
    public currentUser: IUser;
    constructor(private router: Router){
        //  this.currentUser = {
        //     id: 1,
        //     firstName: 'userName',
        //     lastName: 'John',
        //     userName: 'Papa'
        // }
    }

    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            firstName: userName,
            lastName: 'John',
            userName: 'Papa'
        }
        this.router.navigate(['/events'])
    }

    getCurrentUser(){
        var user = this.currentUser;
        return user;
    }

    updateCurrentUser(firstName: string, lastName: string){
       this.currentUser.firstName = firstName;
       this.currentUser.lastName = lastName;
    }

    isAuthenticated(){
        return !!this.currentUser;
    }
}