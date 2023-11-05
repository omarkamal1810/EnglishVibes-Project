import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _HttpClient: HttpClient) { }

  getInActiveGroup(): Observable<any> {
    return this._HttpClient.get("https://localhost:44385/api/Group/inactive")
  }
  getActiveGroup(): Observable<any> {
    return this._HttpClient.get("https://localhost:44385/api/Group/active")
  }
    

  getActiveStudent():Observable<any>{
   return this._HttpClient.get("https://localhost:44385/api/Student/active/all")
   
  }


  getWaitingList():Observable<any>{
   return this._HttpClient.get("https://localhost:44385/api/Student/waitinglist")
   
  }

  getDetailsStudent():Observable<any>{
    
   return this._HttpClient.get(`https://localhost:44385/api/Student/active/`)
   
  }




  
  getinstructors(): Observable<any> {
    return this._HttpClient.get("https://localhost:44385/api/Instructor/all")
  }
  getinstructorsid(): Observable<any> {
    return this._HttpClient.get("https://localhost:44385/api/Instructor/{id}")
  }


  
 
}
