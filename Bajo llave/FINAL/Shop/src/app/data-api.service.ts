import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore' ;
import { from, Observable } from 'rxjs';
import { CamisasInterface } from './components/camisa';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs:AngularFirestore) {
      this.camisasCollection = afs.collection<CamisasInterface>('Camisas');
      this.camisas = this.camisasCollection.valueChanges();

   }
  private camisasCollection: AngularFirestoreCollection<CamisasInterface>;
  private camisas: Observable<CamisasInterface[]>;

  getAllCamisas(){
    return this.camisas = this.camisasCollection.snapshotChanges()
    .pipe(map( changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as CamisasInterface;
        data.Id = action.payload.doc.id;
        return data;

      });
    }));
  }
  addCamisa(){}
  updateCamisa(){}
  deleteCamisa(){}


}
