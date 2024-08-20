import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  menuList: any[] = [
    { name: 'Dashboard', icon: 'dashboard' },
    { name: 'Chat', icon: 'forum' },
    { name: 'Users', icon: 'account_circle' },
    { name: 'Calender', icon: 'calendar_month' },
    { name: 'Friend', icon: 'diversity_3' },
  ];
}
