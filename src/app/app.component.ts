import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Pedro';
  title = 'angular-new';

  userData = {
    email: 'pedro@example.com',
    role: 'admin'
  }

}
