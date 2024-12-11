import { Component, inject } from '@angular/core';
import { NavigationService } from '../../services/navigation/navigation.service';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationSkipped, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-waiter',
  standalone: true,
  imports: [],
  templateUrl: './waiter.component.html',
  styleUrl: './waiter.component.css'
})
export class WaiterComponent {
  navigating: boolean = false
  service: NavigationService = inject(NavigationService)

  constructor(router: Router) {
    router.events.subscribe(
      event => {
        switch (true) {
          case event instanceof NavigationStart:
            this.navigating = true
            break;
          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError:
          case event instanceof NavigationSkipped:
            this.navigating = false
            break;
        }
      }
    )
  }

}
