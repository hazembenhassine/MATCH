import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/authentification/auth-service.service';
import {MatchService} from '../../services/match.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  isLoading: boolean;
  errorMsg: string;

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    remember: [false]
  });

  constructor(private fb: FormBuilder,
              private api: MatchService,
              private authService: AuthService,
              private router: Router) {
    this.isLoading = false;
  }

  ngOnInit() {
  }

  login() {
    this.isLoading = true;
    this.api.login(this.loginForm.value.email, this.loginForm.value.password)
      .then(business => {
        this.authService.setCredentials(business, this.loginForm.value.remember);
        this.router.navigate(['/employer']).then(r => {
          console.log('Logged in successfully!');
        });
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        this.isLoading = false;
      });
  }

}
