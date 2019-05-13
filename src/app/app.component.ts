import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nextchat-template';
  
  constructor(private chatService: ChatService){}
  
  ngOnInit(){
    this.chatService.joinChat()
  }
}
