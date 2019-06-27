import {Component, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Post} from '../models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  CreaPostForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private postsService: PostsService,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.CreaPostForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const datecrea = new Date();
    const newpost = new Post(
      this.CreaPostForm.get('title').value,
      this.CreaPostForm.get('content').value,
      0,
      0,
      datecrea
    );
    this.postsService.creaNewPostInArray(newpost);
    this.router.navigate(['postslist']);
  }
}
