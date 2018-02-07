import { Component, OnInit } from '@angular/core';
import { MessageService } from "../message.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // messageService must be public because Angular only binds to public component propertiess
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
