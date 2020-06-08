import { Component, OnInit } from '@angular/core';
import { course } from '../courses';
import {courseList} from '../mock-course'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course=courseList;
  selectedCourse:course;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(course): void {
    this.selectedCourse = course;
  }

}
