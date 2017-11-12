import { Injectable } from '@angular/core';
import { AngularFireDatabase , AngularFireObject , AngularFireList } from 'angularfire2/database';

import { Client } from '../model/Client';
import {Observable } from 'rxjs/Observable';


@Injectable()
export class ClientService {
  clientsRef: AngularFireList<any>;
  clients: Observable<any[]>;
  client: Observable<any>;

  constructor(public afd: AngularFireDatabase) {
     this.clientsRef = this.afd.list('clients');
     this.clients = this. clientsRef.valueChanges();
  }
  getClients() {

    return this.clients;
  }
  newClient(client: Client) {
    this.clientsRef.push(client);
  }
  getClient(id: string){
    this.client = this.afd.object('/clients' + id ).valueChanges();
    return this.client;

  }
}
