import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = ""
  password: string = ""

  constructor(private toaster: ToastrService, private api: AdminService, private router: Router) {

  }
  logic() {
    //admin login logic
    if (this.email && this.password) {
    //api call
      this.api.getAdminDetails().subscribe({
        next: (res: any) => {
          console.log(res);
          const { email, password } = res
          if (email == this.email && password == this.password) {
            this.toaster.success("login Successful")
            sessionStorage.setItem("adminDetails", JSON.stringify(res))
            this.email=""
            this.password=""
            //navigate to nxt page
            this.router.navigateByUrl("/dashboard")
          } else {
            this.toaster.error("Invalid Email / Password");
          }
        },
        error: (reason: any) => {
          this.toaster.error(reason.message);
        }
      })
    } else {
      this.toaster.info("Compleate Form Properly")
    }
  }

}
