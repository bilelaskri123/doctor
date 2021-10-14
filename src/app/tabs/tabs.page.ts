import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private menuCtrl: MenuController
  ) {}
  more(){
    console.log('more')
    this.menuCtrl.toggle()
  }
}
