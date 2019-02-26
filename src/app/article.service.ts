import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Article} from './article';

@Injectable({providedIn: 'root'})
export class ArticleService {
  constructor(private readonly afs: AngularFirestore) {}

  getArticles(): Observable<Article[]> {
    return this.afs.collection('articles')
        .valueChanges()
        .pipe(map(articles => articles as Article[]));
  }
}
