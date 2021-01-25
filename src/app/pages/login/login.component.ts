import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {LoggerService} from '../../service/logger.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('f', {static: true}) form;

  /**
   * Имя пользователя
   */
  public login: string = '';
  /**
   * Пароль
   */
  public password: string = '';

  constructor(private router: Router, private loggerService: LoggerService) {
  }

  ngOnInit() {
  }
}
