import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/post.model';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})

export class PostListItemComponent implements OnInit {
  @Input() ipost: Post;
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() dloveIts: number;
  @Input() created_at: Date;

//  console.log('coucou %s',ipost.title);
  constructor(private postsService: PostsService) {

  }

  ngOnInit() {

  }
  getColor() {
    if (this.ipost.loveIts >= this.ipost.dloveIts) {
      return 'darkgreen';
    } else if  (this.ipost.loveIts < this.ipost.dloveIts) {
      return 'darkred';
    }
  }
  onLike() {
    // this.loveIts ++;
    this.postsService.addloveIts(this.ipost);
  }
  ondLike() {
    // this.dloveIts ++;
    this.postsService.adddloveIts(this.ipost);
  }
  onSupress() {
    console.log('post a supprimer %s', this.ipost.title);
    this.postsService.removePostFromArray(this.ipost);
  }
}
