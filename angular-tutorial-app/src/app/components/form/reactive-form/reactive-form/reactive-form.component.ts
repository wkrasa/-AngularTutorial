import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface User{
  name: string;
  email: string;
  posts: Post[];
  id?: number;
}

interface Post{
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'at-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  formValue$: Observable<any>;

  form: FormGroup;

  model: User = {
    id: 1,
    name: 'test',
    email: 'test@o2.pl',
    posts: [{ title: 'title 111', text: 'Lorem ipsum', id: 1 }, { title: 'title 222', text: 'Lorem ipsum 2', id: 1 }]
  }

  get postControls(){
    return this.posts.controls as FormGroup[];
  }

  get posts(){
    return this.form.get('posts') as FormArray;
  }


  ngOnInit(): void {
    this.form = this.fb.group({
      id: this.fb.control(null, Validators.required),
      name: this.fb.control(null, Validators.required),
      email: this.fb.control(null, Validators.required),
      posts: this.fb.array(this.model.posts.map(post => this.createPostControl(post)))
    });

    this.form.setValue(this.model);

    this.formValue$ = this.form.valueChanges.pipe(tap(value =>{
      this.model = this.form.value;
      console.log(this.model,value);
    }));
  }

  addNewPost(){
    this.posts.push(this.createPostControl())
  }

  removePost(index: number){
    this.posts.removeAt(index)
  }

  private createPostControl(post?: Post): FormGroup{
    return this.fb.group({
      id: this.fb.control(post?.id, Validators.required),
      title: this.fb.control(post?.title, Validators.required),
      text: this.fb.control(post?.text, Validators.required),
    });
  }
}
