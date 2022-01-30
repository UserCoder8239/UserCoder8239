import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private readonly http: HttpClient) { }

  baseUri = "https://jsonplaceholder.typicode.com/posts";
  blogURL = "https://my.api.mockaroo.com/genereate-blog?key=339e3220";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

   // Get all employees
   getDummyData(): Observable<any> {
    return this.http.get(this.blogURL, { headers: this.headers })
    .pipe(map((data) => {
      return data || []
    }));
  }
}