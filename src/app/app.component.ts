import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SubjectSubscriber, Subject } from 'rxjs/internal/Subject';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'payever-angular-task';
  constructor(
    private router: Router
  ) {

  }

}
