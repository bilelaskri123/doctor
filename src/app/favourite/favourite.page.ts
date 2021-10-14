import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {
  imgArray: any;
  Types: number;
  myRating: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.imgArray = ['assets/imgs/11.png', 'assets/imgs/12.png', 'assets/imgs/13.png', 'assets/imgs/14.png', 'assets/imgs/15.png']
    this.Types = 1
    this.myRating = 4
   }

  ngOnInit() {
  }

  
  myFunction(id) {
    var x = document.getElementById(id);
      $(document).ready(function () {
        $(x).slideToggle('slow');
      });
  }
  
  booking(name){
    var params = {
      name : name
    }
    this.router.navigate(['book', params]);
    // this.router.navigateByUrl('/book');
  }
}
