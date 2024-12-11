import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { WaiterComponent } from "../waiter/waiter.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, WaiterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  protected auth = inject(AuthService);
}
