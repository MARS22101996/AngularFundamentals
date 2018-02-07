import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: `app/user/profile.component.html`,
  styles:[`
   em { float: right; color#E05C65; padding-left: 10px;}
  .error input { background-color: red;}
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup
  private firstName: FormControl
  private lastName: FormControl

  constructor(private authService: AuthService, private router: Router) {

  }

  cancel() {
    this.router.navigate(['/events'])
  }

  saveProfile(formValues){
      this.authService.updateCurrentUser(formValues.firstName,formValues.lastName)
       this.router.navigate(['/events'])
  }

  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched
  }

  validateLastName(){
    return this.lastName.valid || this.lastName.untouched
  }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-z].*')])
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }
}