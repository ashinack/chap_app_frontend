import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  menuList: any[] = [
    { name: 'Dashboard', icon: 'dashboard', url: 'chat/home/dashboard' },
    { name: 'Chat', icon: 'forum', url: 'chat/home/message' },
    { name: 'Users', icon: 'account_circle', url: 'chat/home/user' },
    { name: 'Calender', icon: 'calendar_month', url: 'chat/home/calender' },
    { name: 'Friend', icon: 'diversity_3', url: 'chat/home/friend' },
  ];
  hoveredMenu: any = null;
  selectedMenu: any = null;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {}

  selectMenu(menu: any) {
    console.log(menu, 'menu');

    this.selectedMenu = menu;
    this.router.navigate([menu.url]);
  }
}
