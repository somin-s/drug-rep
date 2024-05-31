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

  constructor(private http: HttpClient) { }

  getCompound(compound: Compound): Observable<CompoutOutput[]> {
      return this.http.post<CompoutOutput[]>('https://www.ebi.ac.uk/unichem/api/v1/compounds',compound)
  } 

  getSources(): Observable<all_Source[]> {
    return this.http.get<all_Source[]>('https://www.ebi.ac.uk/unichem/api/v1/sources/');
  } 
}
