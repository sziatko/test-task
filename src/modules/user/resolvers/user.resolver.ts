import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ApiService } from '../../core/services';
import { UserInterface } from 'src/interfaces';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class UserResolver implements Resolve<any> {

  constructor(private apiService: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<UserInterface> {
    const id: number = route.params['id'];
    return this.apiService.fetchUserById(id)
      .pipe(map(res => res.data))
      .pipe(catchError((err) => throwError(err)));
  }

}
