import { LoggerService } from './services/logger.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loggerService: LoggerService){
  this.loggerService.logger('Je suis le APP component');
  }
  title = 'testProject';
}
