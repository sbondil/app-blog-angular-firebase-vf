import {Component, OnInit} from '@angular/core';
import {Post} from '../models/post.model';
import {Subscription} from 'rxjs';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // @Input() PostsList: Post[]; utilisation du service posts.service
  PostsList: Post[];
  PostsListSubscription: Subscription; // Reception des message PostArray envoyés par Subject emitPostsArray()

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    this.PostsListSubscription = this.postsService.PostsArraySubject.subscribe(
      (postsarray: Post[]) => {
        this.PostsList = postsarray;
      });
    this.postsService.emitPostsArray();
  }
}
