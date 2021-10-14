import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  imgArray: any;

  constructor(
    private router: Router,
  ) {
    this.imgArray = ['assets/imgs/11.png', 'assets/imgs/12.png', 'assets/imgs/13.png', 'assets/imgs/14.png', 'assets/imgs/15.png']
  }

  ngOnInit() {

  }

  SubCat(name) {
    console.log(name)
    var params = {
      name : name
    }
    this.router.navigate(['sub-category', params]);
  }
  notification(){
    this.router.navigateByUrl('/notifications');
  }
}
