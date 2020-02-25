import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSharedService } from '../../shared.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(private appSharedService: AppSharedService) { }

  ngOnInit() {
  }

  sideBarToggle() {
    this.appSharedService.toggleMenu();
  }
}
