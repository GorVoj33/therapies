import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/Comment.model';



@Component({
  selector: 'app-therapist-detail',
  templateUrl: './therapist-detail.component.html',
  styleUrls: ['./therapist-detail.component.css']
})
export class TherapistDetailComponent implements OnInit {
  showComments: boolean = false;
  comments: Comment[] = [];
  rate: 3;
  max: 5;
  constructor() { }

  ngOnInit() {
  }
  showCommentsMethod() {
    this.showComments = true;
    var com1 = new Comment(1, new Date(), 5, 'abvsasdadadadad',1,1);
    this.comments.push(com1);
  }
  saveComment(comment) {

  }
}
