import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredictService {
  private apiUrl = 'http://localhost:5000/predict'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getPrediction(input: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, { input });
  }
}
