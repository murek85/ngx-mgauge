import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  thresholdsConfig = {
    '0': { 'color': 'orange' },
    '30': { 'color': 'green' },
    '70': { 'color': 'red' }
  };

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Home | ngx-mgauge');
  }
}
