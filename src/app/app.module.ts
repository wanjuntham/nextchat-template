import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatContactComponent } from './chat-contact/chat-contact.component';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatInputComponent,
    ChatContactComponent,
    ChatMessagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
