import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }

  private static handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

  login(email: string, password: string): Promise<any> {
    const requestBody = {
      email,
      password
    };
    return this.http.post(`${environment.url}/businesses/login`, JSON.stringify(requestBody))
      .toPromise().catch(MatchService.handleError);
  }

  getCategories(): Promise<any> {
    return this.http.get(`${environment.url}/categories`)
      .toPromise().catch(MatchService.handleError);
  }

  getCategoryById(id: string): Promise<any> {
    return this.http.get(`${environment.url}/categories/getById?id=${id}`)
      .toPromise().catch(MatchService.handleError);
  }

  getCandidatesByCategoryId(id: string): Promise<any> {
    return this.http.get(`${environment.url}/candidates/filter?id=${id}`)
      .toPromise().catch(MatchService.handleError);
  }

  getCandidateById(id: string): Promise<any> {
    return this.http.get(`${environment.url}/candidates/getById?id=${id}`)
      .toPromise().catch(MatchService.handleError);
  }

  getBusinesses(): Promise<any> {
    return this.http.get(`${environment.url}/businesses`)
      .toPromise().catch(MatchService.handleError);
  }

  getBusinessById(id: string): Promise<any> {
    return this.http.get(`${environment.url}/businesses/getById?id=${id}`)
      .toPromise().catch(MatchService.handleError);
  }

}
