import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ApiService } from '../../core/services';
import { UsersInterface } from 'src/interfaces';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UsersResolver implements Resolve<any> {

  constructor(private apiService: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<UsersInterface> {
    const page: number = route.queryParams['page'] || 1;
    return this.apiService.fetchUsers(page)
      .pipe(catchError((err) => throwError(err)));
  }

}
