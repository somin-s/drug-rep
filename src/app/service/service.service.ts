import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//import { environment } from '../../environments/environment';

import { all_Source } from '../models/source';
import { Compound } from '../models/compound';
import { CompoutOutput } from '../models/compound';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // const headers= new HttpHeaders().set('content-type', 'application/json')
  // .set('Access-Control-Allow-Origin', '*')
  // .set('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE, OPTIONS')
  // .set('Access-Control-Allow-Headers','Origin, Content-Type, X-Auth-Token');

  //readonly APIUrl: string | undefined;
  //private APIUrl = environment.APIUrl
  constructor(private http: HttpClient) { }

  //#region for Metadata
  // getMetadata(): Observable<Metadata[]> {
  //   const headers= new HttpHeaders().set('content-type', 'application/json')
  //   .set('Access-Control-Allow-Origin', '*')
  //   .set('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE, OPTIONS')
  //   .set('Access-Control-Allow-Headers','Origin, Content-Type, X-Auth-Token');
  //   return this.http.get<Metadata[]>(this.APIUrl+'Members',{headers: headers, withCredentials: true})
  // }

  getCompound(compound: Compound): Observable<CompoutOutput[]> {
    return this.http.post<CompoutOutput[]>('https://www.ebi.ac.uk/unichem/api/v1/compounds',compound);
  } 

  getSources(): Observable<all_Source[]> {
    return this.http.get<all_Source[]>('https://www.ebi.ac.uk/unichem/api/v1/sources/');
  } 
  
  //getImage(uci: string){
  //   return this.http.get('https://www.ebi.ac.uk/unichem/api/v1/sources/');
  //} 

}
