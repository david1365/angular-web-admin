import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {DaakService} from "../../services/daak.service";

@Component({
  selector: 'dk-v-sub-menu',
  templateUrl: './dk-vertical-sub-menu.component.html',
  styleUrls: ['./dk-vertical-sub-menu.component.css']
})
export class DkVerticalSubMenuComponent implements OnInit {
  @Input('icon') icon: string;
  @Input('title') title: string;
  @ViewChild('ul') ul: ElementRef;
  @ViewChild('subMenu') subMenu: ElementRef;
  showed: boolean = false;
  constructor(private renderer: Renderer2, private daakService: DaakService) { }

  ngOnInit() {
  }

  doSubMenu(event){
    event.stopPropagation();
    var subMenu = this.subMenu.nativeElement;
    var that = this;

    this.daakService.toggle(this.ul, 'fadeIn',
      'fadeOut',
      () => {
        that.renderer.addClass(subMenu, 'open');
      },
      () => {
        that.renderer.removeClass(subMenu, 'open');
      },
      .2
    )
  }

}
