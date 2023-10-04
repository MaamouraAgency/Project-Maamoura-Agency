import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Config } from '../auth/models/config.model';
import { Auth, getAuth } from 'firebase/auth';
import {
  CollectionReference,
  Firestore,
  getFirestore,
  collection,
} from 'firebase/firestore';

@Injectable()
export class FirebaseService {
  public app: FirebaseApp;
  public auth: Auth;
  public fireStore: Firestore;

  // Collections
  public usersCollection: CollectionReference;

  constructor(private configService: ConfigService<Config>) {
    this.app = initializeApp({
      apiKey: "AIzaSyD2DeogK9DrPE3PAiGP7BjUXPNh8Dc6R4k",
      authDomain: "dhiaauth.firebaseapp.com",
      projectId: "dhiaauth",
      storageBucket: "dhiaauth.appspot.com",
      messagingSenderId: "181937883922",
      appId: "1:181937883922:web:fe552f8b7e5cef76d681cb",
      measurementId: "G-ZK1EV6N30W"
    });

    this.auth = getAuth(this.app);
    this.fireStore = getFirestore(this.app);

    this._createCollections();
  }

  private _createCollections() {
    this.usersCollection = collection(this.fireStore, 'users');
  }
}