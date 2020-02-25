import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AppSharedService {
    constructor() { }
     private sideBarVisible = true;
     private sideBarEvent = new Subject<boolean>();
     sideBarEventEmitted$ = this.sideBarEvent.asObservable();

    sideMenuItemEvents($event) {
        this.sideBarEvent.next(this.sideBarVisible);
    }
    toggleMenu() {
        this.sideBarVisible = !this.sideBarVisible;
    }
}
