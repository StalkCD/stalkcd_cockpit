import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  
  constructor(private http: HttpClient) {}

  throwError(){
    throw new Error("My pretty error");
  }

  throwHttpError(){
    this.http.get('URL').subscribe();
  }
}
