import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {
  chatInputForm = new FormGroup({
    textInput: new FormControl('')
  })  

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  onSubmitMessage(){
    this.chatService.addMessage(this.chatInputForm.controls.textInput.value)
    this.chatInputForm.controls.textInput.setValue('')
  }
}
