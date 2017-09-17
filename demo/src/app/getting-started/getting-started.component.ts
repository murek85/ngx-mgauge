import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {

  thresholdsConfig = {
    '0': { 'color': 'orange' },
    '30': { 'color': 'green' },
    '70': { 'color': 'red' }
  };

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Getting Started | ngx-mgauge');
  }

}
