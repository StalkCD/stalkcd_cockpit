import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';  // Import CommonModule for ngIf, ngFor, etc.
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for HTTP operations

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  standalone: true,  // Enable standalone component
  imports: [CommonModule, HttpClientModule]  // Import necessary modules
})
export class ErrorComponent {
  
  constructor(private http: HttpClient) {}

  throwError() {
    throw new Error("My pretty error");
  }

  throwHttpError() {
    this.http.get('URL').subscribe();
  }
}
