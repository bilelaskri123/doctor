import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {
  pagename: any;
  myRating: number;
  selected: any;
  selectedtime: number;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    public alertCtrl: AlertController,
  ) { }

  ngOnInit() {
    this.myRating = 2
    this.selected = 0
    this.selectedtime = 0
    this.route.params.subscribe(params => {
      console.log(params)
      this.pagename = params.name
    })
  }
  rating(){

  }

  selectedbtn(i){
    this.selected = i
    console.log(this.selected)
  }

  selectedtimebtn(i){
    this.selectedtime = i
    console.log(this.selected)
  }

  async book(){
    console.log('book')
    const alert = await this.alertCtrl.create({
      header: 'Booked',
      subHeader: 'You appointment has been booked',
      message: 'We will send more details on you email.',
      buttons: ['OK']
    });

    await alert.present();
    this.navCtrl.navigateBack('/tabs');
  }
}
