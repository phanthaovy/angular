import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) { }

    get(url: string): Observable<any> {
        return this.http.get(`${environment.baseApiUrl}${url}`);
    }

    post(url: string, body: any = {}): Observable<any> {
        return this.http.post(`${environment.baseApiUrl}${url}`, body);
    }

    delete(url: string): Observable<any> {
        return this.http.delete(`${environment.baseApiUrl}${url}`);
    }

    update(url: string, body: any = {}): Observable<any> {
        return this.http.put(`${environment.baseApiUrl}${url}`, body);
    }
}
