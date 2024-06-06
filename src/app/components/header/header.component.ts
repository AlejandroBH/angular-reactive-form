import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: 'home',
      },
      {
        label: 'About',
        icon: 'pi pi-exclamation-circle',
        routerLink: 'about',
      },
      {
        label: 'Register',
        icon: 'pi pi-user-plus',
        routerLink: 'register',
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        routerLink: 'contact',
      },
    ];
  }
}
