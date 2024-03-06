import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserScheme } from '../Models/userScheme';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  SERVER_URL="https://emp-server-x44f.onrender.com"

  constructor( private http:HttpClient) { }
  addUserAPI(user:UserScheme){
    return this.http.post(`${this.SERVER_URL}/users`,user)
  }

  getAllUerAPI(){
    return this.http.get(`${this.SERVER_URL}/users`)
  }

  getSingleUserAPI(id:string){
    return this.http.get(`${this.SERVER_URL}/users/${id}`)
  }

  updateUserAPI(userId:string,userDetails:UserScheme){
   return this.http.put(`${this.SERVER_URL}/users/${userId}`,userDetails)
  }

  removeUserAPI(userId:string){
    return this.http.delete(`${this.SERVER_URL}/users/${userId}`)
  }
}
