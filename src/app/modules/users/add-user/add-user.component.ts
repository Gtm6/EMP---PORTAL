import { Component } from '@angular/core';
import { UserScheme } from '../Models/userScheme';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user:UserScheme = {}

  constructor(private api:ApiService,private toaster:ToastrService){}

  addUser(){
     this.api.addUserAPI(this.user).subscribe({
      next:(res:any)=>{
        this.toaster.success("Added successfully")
        this.cancel()
      },
      error:(reason:any) =>{
        console.log(reason);
        
      }
     })
  }

  cancel(){
    this.user.email=""
    this.user.empId=""
    this.user.name=""
    this.user.status=""
  }

}
