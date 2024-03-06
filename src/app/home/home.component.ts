import { Component, OnInit } from '@angular/core';
import { ApiService } from '../modules/users/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  adminName: string = ""
  userCount: number = 0
  sideBarStatus: boolean = true


  constructor(private userAPI: ApiService,private router:Router) { }

  ngOnInit(): void {
    this.getTotalEmployeCount()
    if (sessionStorage.getItem("adminDetails")) {
      this.adminName = JSON.parse(sessionStorage.getItem("adminDetails") || "").name
    }
  }

  menuButtonClicked() {
    this.sideBarStatus = !this.sideBarStatus
  }

  getTotalEmployeCount() {
    this.userAPI.getAllUerAPI().subscribe((res: any) => {
      this.userCount = res.length
    })
  }

  onAdminChange(event: any) {
    this.adminName = event
  }

  logout(){
    sessionStorage.clear()
    this.router.navigateByUrl("")
  }
}
