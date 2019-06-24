import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges, OnDestroy {

  constructor() {
    //instancja klasy
    console.log('constructor');
   }

  ngOnInit() {
    //wyrenderowanie komponentu w DOM
    console.log('ngOnInit');
  }

  ngOnChanges(){
    //kiedy komponent zostanie zasioplny danymi
    console.log('ngOnChanges');
  }

  ngOnDestroy(){
    //kiedy umiera
    console.log('ngOnDestroy');
  }

}
