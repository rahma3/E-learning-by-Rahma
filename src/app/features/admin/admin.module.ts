import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { AddCourseComponent } from './add-course/add-course.component';

@NgModule({
  declarations: [AddUserComponent, AddCourseComponent],
  imports: [CommonModule],
})
export class AdminModule {}
