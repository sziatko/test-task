import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInterface } from '../../../../interfaces';
import { ApiService } from '../../../core/services';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: UserInterface;

  constructor(private apiService: ApiService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.data
      .pipe(map((data) => data.user))
      .subscribe((user: UserInterface) => {
        this.user = user;
      });
  }

  back(): void {
    this.router.navigate(['./users']);
  }
}
