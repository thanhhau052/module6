import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BenhAn} from '../../model/benh-an/benhAn';
import {environment} from '../../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BenhNhanService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<BenhAn[]> {
    return this.http.get<BenhAn[]>(API_URL + '/');
  }

  save(student): Observable<BenhAn> {
    return this.http.post<BenhAn>(API_URL, student);
  }

  findById(id: number) {
    return this.http.get<BenhAn>(`${API_URL}/${id}`);
  }

  update(id: number, student: BenhAn): Observable<BenhAn> {
    return this.http.put<BenhAn>(`${API_URL}/${id}`, student);
  }

  delete(id: number): Observable<BenhAn> {
    return this.http.delete<BenhAn>(`${API_URL}/${id}`);
  }

}
