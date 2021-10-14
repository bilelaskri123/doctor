import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-appoinments',
  templateUrl: './appoinments.page.html',
  styleUrls: ['./appoinments.page.scss'],
})
export class AppoinmentsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    
  myFunction(id) {
    var x = document.getElementById(id);
      $(document).ready(function () {
        $(x).slideToggle('slow');
      });
  }


}
