import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'client';
  users:any;
  isEDIManager: boolean = false;
  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.getUsers();  
  }

  display : boolean = true;
  
  getUsers()
  {
    debugger;
    this.http.get("https://localhost:5001/api/register").subscribe(response => {
      debugger;
      this.users =response;
    },error =>{
      console.log(error);
    })
  }
  


}
