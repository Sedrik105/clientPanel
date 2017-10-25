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
}
