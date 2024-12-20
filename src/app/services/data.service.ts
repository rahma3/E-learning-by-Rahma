import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Course, Module, UserId, Usuari, Topic } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  /* PROPERTIES */
  private baseUrl: string = 'https://us-central1-elearning-vue-itacademy.cloudfunctions.net'; // Base URL for API requests

  constructor(private http: HttpClient) {}

  /**
   * GET: Retrieves all users or a specific user by ID
   * @param userId (optional) User ID to filter
   * @returns Observable of a specific user or all users
   */
  getUsers(userId?: UserId): Observable<Usuari> | Observable<Usuari[]> {
    if (userId) {
      return this.http
        .get<Usuari>(`${this.baseUrl}/getUsers?userId=${userId}`)
        .pipe(catchError(this.handleError));
    } else {
      return this.http
        .get<Usuari[]>(`${this.baseUrl}/getUsers`)
        .pipe(catchError(this.handleError));
    }
  }

  /**
   * GET: Retrieves courses by ID or all courses if no ID is provided
   * @param courseId (optional) Course ID to filter
   * @returns Observable of a specific course or all courses
   */
  getCourses(courseId?: number): Observable<Course> | Observable<Course[]> {
    if (courseId) {
      return this.http
        .get<Course>(`${this.baseUrl}/getCourses?courseId=${courseId}`)
        .pipe(catchError(this.handleError));
    } else {
      return this.http
        .get<Course[]>(`${this.baseUrl}/getCourses`)
        .pipe(catchError(this.handleError));
    }
  }

  /**
   * GET: Retrieves modules for a specific course or all modules
   * @param courseId (optional) Course ID to filter
   * @returns Observable of all modules
   */
  getModules(courseId?: number): Observable<Module[]> {
    if (courseId) {
      return this.http
        .get<Module[]>(`${this.baseUrl}/getModules?courseId=${courseId}`)
        .pipe(catchError(this.handleError));
    } else {
      return this.http
        .get<Module[]>(`${this.baseUrl}/getModules`)
        .pipe(catchError(this.handleError));
    }
  }

  /**
   * GET: Retrieves a specific module by ID
   * @param moduleId Module ID
   * @returns Observable of the module
   */
  getModule(moduleId: number): Observable<Module> {
    return this.http
      .get<Module>(`${this.baseUrl}/getModule/${moduleId}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * GET: Retrieves all topics
   * @returns Observable of topics
   */
  getTopics(): Observable<Topic[]> {
    return this.http
      .get<Topic[]>(`${this.baseUrl}/getTopics`)
      .pipe(catchError(this.handleError));
  }

  /**
   * DELETE: Deletes a user by ID
   * @param userId User ID
   * @returns Observable of the deletion result
   */
  deleteUser(userId: number): Observable<void> {
    return this.http
      .delete<void>(`${this.baseUrl}/deleteUser/${userId}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * DELETE: Deletes a course by ID
   * @param courseId Course ID
   * @returns Observable of the deletion result
   */
  deleteCourse(courseId: number): Observable<void> {
    return this.http
      .delete<void>(`${this.baseUrl}/deleteCourse/${courseId}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * DELETE: Deletes a module by ID
   * @param moduleId Module ID
   * @returns Observable of the deletion result
   */
  deleteModule(moduleId: number): Observable<void> {
    return this.http
      .delete<void>(`${this.baseUrl}/deleteModule/${moduleId}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * DELETE: Deletes a topic by ID
   * @param topicId Topic ID
   * @returns Observable of the deletion result
   */
  deleteTopic(topicId: number): Observable<void> {
    return this.http
      .delete<void>(`${this.baseUrl}/deleteTopic/${topicId}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Error handling for HTTP requests
   * @param error Error object
   * @returns Throws an error
   */
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    throw error;
  }
}
