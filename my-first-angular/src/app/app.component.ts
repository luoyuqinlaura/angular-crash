import { Component } from '@angular/core';

// 这个component里，selector是这个component被调用的名称<app-root>, templateUrl代表这个component对应的html
// 在这个html里可以调用此ts file class里的变量，比如title
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-first-angular';
}
