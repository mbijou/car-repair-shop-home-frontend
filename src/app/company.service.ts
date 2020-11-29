import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  companyData: any;

  constructor(
    private http: HttpClient,
  ) { }

  getCompanyData(){
    return this.http.get('api/company/');
  }
}
