import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import * as feather from 'feather-icons';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'home';

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
  }
}
