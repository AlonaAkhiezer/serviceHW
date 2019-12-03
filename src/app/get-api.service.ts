import { Injectable, Inject } from '@angular/core';
import { IProject } from './IProject';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASE_URL_TOKEN } from './config';

@Injectable()
export class GetAPIService {

  constructor(private http: HttpClient, 
    @Inject(BASE_URL_TOKEN) private baseUrl: string) { }

  public getAPIs(searchTerm: string): Observable<IProject[]>{
    return this.http.get<IProject[]>(`${this.baseUrl}=${searchTerm}`);
  }  
}