import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import * as feather from 'feather-icons';
import * as $ from 'jquery';
import {CompanyService} from './company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  companyName = 'home';

  constructor(
    public companyService: CompanyService
  ) {}

  ngOnInit(): void{
    AOS.init(
      {
        disable: 'mobile',
        duration: 600,
        once: true,
        startEvent: 'load'
      }
    );
    window.addEventListener('load', AOS.refresh);
    feather.replace();

    this.companyService.getCompanyData().subscribe(data => {
      console.warn(data);
      this.companyService.companyData = data;
      console.warn(this.companyService.companyData);
    });

  }

}
