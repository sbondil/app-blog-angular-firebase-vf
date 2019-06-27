import {Injectable} from '@angular/core';
import {Post} from '../models/post.model';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private PostsArray: Post[] ;
  PostsArraySubject = new Subject<Post[]>();

  constructor() {
    this.getPostsArray();
  }

  emitPostsArray() {
    this.PostsArraySubject.next(this.PostsArray);
  }

  savePostArray() {
    firebase.database()
      .ref('/posts')
      .set(this.PostsArray);
  }

  getPostsArray() {
    firebase.database()
      .ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.PostsArray = data.val() ? data.val() : [];
          this.emitPostsArray();
        }
      );
  }

  removePostFromArray(post: Post) {
    const postIndexToRemove = this.PostsArray.findIndex(
      (postEl) => {
        if (postEl === post) {
          console.log('Postes identiques');
          return true;
        }
      }
    );
    this.PostsArray.splice(postIndexToRemove, 1);
    this.savePostArray();
    this.emitPostsArray();
  }

  creaNewPostInArray(newpost: Post) {
    this.PostsArray.push(newpost);
    this.savePostArray();
    this.emitPostsArray();
  }

  addloveIts(post: Post) {
    const postIndexToModify = this.PostsArray.findIndex(
      (postEl) => {
        if (postEl === post) { // optimisation -> rajouter un id et faire le test sur postE1.id===post.id
          return true;
        }
      }
    );
    this.PostsArray[postIndexToModify].loveIts++;
    this.savePostArray();
    this.emitPostsArray();
  }

  adddloveIts(post: Post) {
    const postIndexToModify = this.PostsArray.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.PostsArray[postIndexToModify].dloveIts++;
    this.savePostArray();
    this.emitPostsArray();
  }

}
