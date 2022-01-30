import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DummyData } from '../../modals/component1';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  @Input() public blogInfo!: DummyData;
  @Output() viewBlog = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.blogInfo);
    
  }

  viewBlogInfo() {
    this.viewBlog.emit(this.blogInfo);
  }

}
