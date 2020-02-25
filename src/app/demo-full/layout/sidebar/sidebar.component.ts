import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { AppSharedService } from '../../shared.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  currentFragment='';

  constructor(private viewportScroller: ViewportScroller,
    public appSharedService: AppSharedService,
    private router: Router,
    private route:ActivatedRoute) { }
  activeFragment = this.route.fragment.pipe();
  ngOnInit() {
    this.route.fragment.subscribe((fragment: string) => {
        if (fragment && document.getElementById(fragment) != null) {
          setTimeout(() => {
          this.currentFragment = fragment;
        }, 0);
        }
    });
  }


  public onClick(elementId: string): void {
    // this.viewportScroller.setOffset([0, 48]);
    // this.viewportScroller.scrollToAnchor(elementId);
  }

}
