import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  SERVER_URL: String = "https://emp-server-x44f.onrender.com"
  constructor(private http: HttpClient) { }

  getAdminDetails() {
     return this.http.get(`${this.SERVER_URL}/users/1`)
  }

  updateAdminAPI(adminDetails:any){
   return this.http.put(`${this.SERVER_URL}/users/1`,adminDetails)
  }

  isLoggedIn(){
    return !!sessionStorage.getItem("adminDetails")
  }
}
