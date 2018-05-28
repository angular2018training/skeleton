import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'fixed-sn');
    this.renderer.addClass(document.body, 'light-blue-skin');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'fixed-sn');
    this.renderer.removeClass(document.body, 'light-blue-skin');
  }
}
