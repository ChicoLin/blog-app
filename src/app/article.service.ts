import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ArticleService {
  constructor(private readonly afs: AngularFirestore) {}

  getArticles(): Observable<any[]> {
    return this.afs.collection('articles').valueChanges();
  }
}
