import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { serialize } from '@shared';

@Injectable()
export class TablesRemoteDataService {
  constructor(private http: HttpClient) {}

  getData(params = {}) {
    return this.http.get('https://api.github.com/search/repositories', { params });
  }
}
