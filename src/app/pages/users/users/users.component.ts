import { Component, OnInit } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor() { }

  ngOnInit(): void {
    // Mock users data, replace with actual API call to fetch users
    this.users = [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Teacher' },
      { id: 3, name: 'Samuel Green', email: 'samuel.green@example.com', role: 'Student' },
    ];
  }

  // You can add methods for handling actions like delete or edit
  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }

}
