import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



//rutas
import {app_routing} from "./app.routes";



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CamisetasComponent } from './components/camisetas/camisetas.component';
import {environment} from 'src/environments/environment';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFirestore} from '@angular/fire/firestore';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    CamisetasComponent,
  ],
  imports: [
    BrowserModule,
    app_routing,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
