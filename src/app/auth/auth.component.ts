import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
declare var WOW;
declare var $;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.addClass(document.body, 'creative-lp');
    new WOW().init();
    // SideNav Initialization
    $('.button-collapse').sideNav();
  }

  ngOnDestroy(): void {
    // this.renderer.removeClass(document.body, 'creative-lp');
  }
}
