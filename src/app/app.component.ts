import { Component } from '@angular/core';

// import { Location } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-painel';

  route: any;

  constructor(
    // location: Location, router: Router
  ) {

    // console.log(location);
// router.events.subscribe(val => {
//   if (location.path() != "") {
//     this.route = location.path();
//   } else {
//     this.route = "Home";
//   }
// });
  }

  ngOnInit() {
    
  }
}
