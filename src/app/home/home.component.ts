import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let response = this.http.get("https://service.eu.apiconnect.ibmcloud.com/gws/apigateway/api/18e3b6a2b3b13f76c05cc25d0d54f92505ea3971689337fa3293f378db3d298c/getdetails/entries");
    response.subscribe((data)=>console.log(data));
  }

}
