import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { error, log } from 'console';
import { title } from 'process';

@Component({
  selector: 'app-post-api-2',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-api-2.component.html',
  styleUrl: './post-api-2.component.css'
})
export class PostApi2Component {

  newPost: FormGroup = new FormGroup({
    userId: new FormControl(0, [Validators.required]),
    id: new FormControl(0, [Validators.required]),
    title: new FormControl("", [Validators.required]),
    body: new FormControl("", [Validators.required])
  })

  posts: any = [];

  constructor(private http: HttpClient) {
  }


  savePost() {
    this.posts = this.newPost;
    this.http.post("https://jsonplaceholder.typicode.com/posts", this.newPost.value).subscribe((res: any) => {
      alert("Data Saved")
    }, error => {
      console.log(error);
      console.log(this.newPost
      );
      alert("Error Occured")
    })
  }
}
