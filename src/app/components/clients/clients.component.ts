import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import  { Client } from '../../model/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  totalOwd: number;
  constructor(public clientService: ClientService) {

  }

  ngOnInit() {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
     // console.log(clients);
    })
  }

}
