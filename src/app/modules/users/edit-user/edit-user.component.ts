import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserScheme } from '../Models/userScheme';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: UserScheme = {}

  constructor(private route: ActivatedRoute, private api: ApiService ,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      console.log(res);
      const { id } = res
      this.getUserDetails(id)

    })
  }

  getUserDetails(userId: string) {
    this.api.getSingleUserAPI(userId).subscribe((res: any) => {
      this.user = res
      console.log(this.user);

    })
  }

  cancel(userId:any){
    this.getUserDetails(userId)
  }

  updateUser(id:any){
    this.api.updateUserAPI(id,this.user).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.toaster.success("Update Successful") 
      },
      error:(reason:any)=>{
        this.toaster.warning(reason.message);
      }
    })
  }





}
