import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as socketio from 'socket.io-client'

interface User {
  username: string
  id: string
}


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  socket = null
  messages = new BehaviorSubject([
    {
      username: "Test User",
      message: "Hello world!",
      timestamp: 0
    }
  ])
  users = new BehaviorSubject<User[]>([
    {
      id: "1",
      username: "Test User"
    }
  ])
  currentUser = new BehaviorSubject<User>(null)

  newMessage = new BehaviorSubject({})

  constructor() { }

  private initSocket(): void {
    if (!this.socket) {
      this.socket = socketio('https://lirenyeo-react-group-chat-socket-io-server-1.glitch.me/')
    }
  }

  joinChat(): void {
    this.initSocket()

    this.socket.emit('NEW_USER')
    this.socket.on('GET_CURRENT_USER', newUser => {
        this.currentUser.next(newUser)
    })

    this.socket.on("UPDATE_USER_LIST", users => {
      this.users.next(users)
    })

    this.socket.on("RECEIVE_BROADCAST", message => {
      let tempMessages = this.messages.getValue()

      tempMessages.push(message)

      this.messages.next(tempMessages)
    })
    

  }

  getMessages(){
    return this.messages
  }

  getUsers(){
    return this.users
  }

  addMessage(message){
    // {username: string, message: string, timestamp: number}
    
    this.socket.emit('BROADCAST_MESSAGE',{
      username: this.currentUser.getValue().username,
      message: message,
      timestamp: 3
    })

  }


}
