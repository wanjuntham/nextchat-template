import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-contact',
  templateUrl: './chat-contact.component.html',
  styleUrls: ['./chat-contact.component.css']
})
export class ChatContactComponent implements OnInit {
  users=[]

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getUsers().subscribe(users => {
      this.users = users
    })
  }
}
