import { Component, OnInit } from '@angular/core';
import { AppSharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public appSharedService: AppSharedService) { }

  ngOnInit() {
  }

}
