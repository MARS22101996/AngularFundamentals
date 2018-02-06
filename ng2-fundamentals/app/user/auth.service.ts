import { Injectable } from '@angular/core'
import { IUser } from './user.model'

@Injectable()
export class AuthService {
    public currentUser: IUser;
    constructor(){
         this.currentUser = {
            id: 1,
            firstName: 'userName',
            lastName: 'John',
            userName: 'Papa'
        }
    }

    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            firstName: userName,
            lastName: 'John',
            userName: 'Papa'
        }
    }

    getCurrentUser(){
        var user = this.currentUser;
        return user;
    }

    isAuthenticated(){
        return !!this.currentUser;
    }
}