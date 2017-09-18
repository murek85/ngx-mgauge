import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {

  config = {
    '0': { 'color': '#FB8C00' },
    '30': { 'color': '#7CB342' },
    '70': { 'color': '#e53935' }
  };

  usageCode = '';
  configureCode = '';

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Getting Started | ngx-mgauge');
    this.usageCode = `
      import { Component } from '@angular/core';

      @Component({
          selector: 'app-component',
          templateUrl: 'app.html'
      })
      export class AppComponent {
          type = "semi";
          value = 25;
          parameter = "Use";
          unit = "%";
      }

      <ngx-mgauge [type]="type"
                  [value]="value"
                  [label]="parameter"
                  [append]="unit">
      </ngx-mgauge>`;

    this.configureCode = `
      @Component({ ... })
      export class AppComponent {
          ...
          config = {
              '0': {color: '#FB8C00'},
              '30': {color: '#7CB342'},
              '70': {color: '#e53935'}
          };
          ...
      }

      <ngx-mgauge ... [thresholds]="config"></ngx-mgauge>`;
  }
}
