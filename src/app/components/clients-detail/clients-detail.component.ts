import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Client } from '../../model/Client';

@Component({
  selector: 'app-clients-detail',
  templateUrl: './clients-detail.component.html',
  styleUrls: ['./clients-detail.component.css']
})
export class ClientsDetailComponent implements OnInit {
  id: string;
  client: Client;
  hasBalace: boolean = false;
  showBalance: boolean = false;
  constructor(
    private clientService: ClientService,
    private flashMsg: FlashMessagesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    //get id from url
    this.id = this.route.snapshot.params['id'];
    // get client
    this.clientService.getClient(this.id).subscribe(client => {
      if (client.balance > 0 || client.balance == null ) {
        this.hasBalace = true;
      }
      this.client = client;
      console.log(client);
    });
  }

}
