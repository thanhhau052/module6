import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BacSi} from "../../model/benh-an/bacSi";

const API_URL = 'http://localhost:3000/bac-si';
@Injectable({
  providedIn: 'root'
})
export class BacSiService {

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<BacSi[]> {
    return this.http.get<BacSi[]>(API_URL);
  }
}
