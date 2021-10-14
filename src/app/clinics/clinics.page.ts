import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.page.html',
  styleUrls: ['./clinics.page.scss'],
})
export class ClinicsPage implements OnInit {
  pagename: any;
  imgArray: any;
  Types: any;
  myRating: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.imgArray = ['assets/imgs/11.png', 'assets/imgs/12.png', 'assets/imgs/13.png', 'assets/imgs/14.png', 'assets/imgs/15.png']
    this.Types = 1
   }

  ngOnInit() {
    this.myRating=4
    this.route.params.subscribe(params => {
      console.log(params)
      this.pagename = params.name
    })
  }

  rating(data){
    // this.myRating=data
    // console.log(data)
  }

  booking(name){
    var params = {
      name : name
    }
    this.router.navigate(['book', params]);
    // this.router.navigateByUrl('/book');
  }
  
  myFunction(id) {
    console.log(id)
    var x = document.getElementById(id);
      $(document).ready(function () {
        $(x).slideToggle('slow');
      });
  }

}
