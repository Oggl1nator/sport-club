import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../service/login.service';
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

  constructor(private loginService: LoginService,
              private router: Router, private loggerService: LoggerService) {
  }

  ngOnInit() {
  //   this.loggerService.info('info');
  //   this.loggerService.warn('warn');
  //   this.loggerService.error('error');
  }

  /**
   * При нажатии на кнопку "войти"
   */

  // public doLogin() {
  //   this.loginService.doLoginOffline();
  //   this.router.navigate(['']);
  //   this.loginService.doLogin(this.login, this.password)
  //     .subscribe((res: any) => {
  //       if (res.token) {
  //         this.router.navigate(['/root']);
  //       }
  //     });
  // }


}
