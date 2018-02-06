import { NgModule } from '@angular/core'
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ProfileComponent } from "./profile.component";
import { userRoutes } from "./user.routes";
import { LoginComponent } from "./login.component";
import { FormsModule } from "@angular/forms";

@NgModule({
   imports: [CommonModule,FormsModule, RouterModule.forChild(userRoutes)],
   declarations: [ProfileComponent, LoginComponent],
   bootstrap: [],
   providers: []
})

export class UserModule { }
