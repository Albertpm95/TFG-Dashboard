import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { API_URL } from '../../env';
import { Feedback } from '../../shared/Feedback';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  constructor(private http: HttpClient) {}

  getFeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${API_URL}/recuperar-feedback`);
  }
}
