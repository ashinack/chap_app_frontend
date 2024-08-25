import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.scss',
})
export class ChatPageComponent {
  chatList: any[] = [1, 2, 3, 4, 5];
}
