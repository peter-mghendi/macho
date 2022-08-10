import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PresidentialResults} from "../models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NationService {
  constructor(private http : HttpClient) { }

  public getPresidentialResults() : Observable<PresidentialResults> {
    return this.http.get<PresidentialResults>("https://static.nation.africa/2022/president.json");
  }
}
