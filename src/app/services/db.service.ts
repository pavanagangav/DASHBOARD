import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Db } from '../models/db';

@Injectable({
  providedIn: 'root'
})
export class DbService {
private baseurl="http://localhost:8085/api/v1/add"
  constructor(private http:HttpClient) { }
  getall():Observable<any>{
    return this.http.get<any>(this.baseurl)
  }
  adduser(user:Db):Observable<any>{
    return this.http.post<any>(this.baseurl,{data:user})
  }
  deleteuser(id:number):Observable<any>{
    return this.http.delete<any>(`${this.baseurl}/id/${id}`)
  }
  getbyemail(email:string):Observable<any>{
    return this.http.get<any>(`${this.baseurl}/search?email=${email}`)
  }
  updateuser(id:number,user:Db):Observable<any>{
    return this.http.put<any>(`${this.baseurl}/id/${id}`,{data:user})
  }
  getbypassword(password:string):Observable<any>{
    return this.http.get<any>(`${this.baseurl}/search?password=${password}`)
  }
}
