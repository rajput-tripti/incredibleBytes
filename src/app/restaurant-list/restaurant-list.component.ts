import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  constructor(private http: HttpClient) { }
  restaurants : any;

  ngOnInit(): void {
    let response = this.http.get("https://service.eu.apiconnect.ibmcloud.com/gws/apigateway/api/18e3b6a2b3b13f76c05cc25d0d54f92505ea3971689337fa3293f378db3d298c/food_posting/entries");
    response.subscribe((data: any)=>{
      console.log(data.entries);
      this.restaurants=data.entries;
    });
  }
}
