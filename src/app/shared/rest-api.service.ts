import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Star } from '../shared/star';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiURL = 'https://swapi.co/api';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  getStars(): Observable<Star[]> {
    return this.http.get<Star[]>(this.apiURL + '/people')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  getStar(id): Observable<Star> {
    return this.http.get<Star>(this.apiURL + '/people/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  createStar(star): Observable<Star> {
    return this.http.post<Star>(this.apiURL + '/people', JSON.stringify(star), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  updateStar(id, star): Observable<Star> {
    return this.http.put<Star>(this.apiURL + '/people/' + id, JSON.stringify(star), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  deleteStar(id) {
    return this.http.delete<Star>(this.apiURL + '/people/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}
