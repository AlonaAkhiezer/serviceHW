import { Injectable, Inject } from '@angular/core';
import { IAPIObj } from './apiObj';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASE_URL_TOKEN } from './config';

@Injectable()
export class GetAPIService {

  constructor(private http: HttpClient, 
    @Inject(BASE_URL_TOKEN) private baseUrl: string) { }

  public getAPIs(searchTerm: string): Observable<IAPIObj[]>{
    return this.http.get<IAPIObj[]>(`${this.baseUrl}=${searchTerm}`);
  }  
}