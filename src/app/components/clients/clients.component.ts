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
      this.getTotalOwed();
     // console.log(clients);
    })
  }
  getTotalOwed() {
    let total = 0;
    for (let i = 0; i < this.clients.length; i++) {
      total = total + parseFloat(this.clients[i].balance.toString());
    }
    this.totalOwd = total;

  }

}
