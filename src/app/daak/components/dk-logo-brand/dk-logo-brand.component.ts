import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {DaakService} from '../../services/daak.service';

@Component({
  selector: 'dk-logo-brand',
  templateUrl: './dk-logo-brand.component.html',
  styleUrls: ['./dk-logo-brand.component.css']
})
export class DkLogoBrandComponent implements OnInit, AfterViewInit {
  @Input('icon') icon: string;
  @Input('title') title: string;
  @ViewChild('brand') brand: ElementRef;
  constructor(private daakService: DaakService, private renderer: Renderer2) { }

  ngOnInit() { }

  ngAfterViewInit() {
      const elem = this.brand.nativeElement;
      this.renderer.listen(elem,'mouseenter', (event) => {
        this.daakService.cssAnimate(this.brand, 'bounceIn');
      });
  }

}
