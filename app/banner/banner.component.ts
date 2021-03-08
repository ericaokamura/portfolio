import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @ViewChild( MatMenuTrigger ) trigger: MatMenuTrigger;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openMenuTrigger() {
    this.trigger.openMenu();
  }

  openAbout() {
    this.router.navigate(['/about']);
  }

  openPortfolio(){
    this.router.navigate(['/portfolio']);
  }

  openContact(){
    this.router.navigate(['/contact']);
  }

}
