import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-auth-page',
    templateUrl: './auth-page.component.html',
    styleUrl: './auth-page.component.css',
    imports: [ReactiveFormsModule, NgIf]
})
export class AuthPageComponent implements OnInit {
  errorSession: boolean = false
  formLogin:FormGroup = new FormGroup({});

  constructor(private authService: AuthService, private cookie:CookieService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.formLogin = new FormGroup( 
      {
        email: new FormControl('',[
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
    )
  }

  sendLogin():void {
    const { email, password } = this.formLogin.value
    this.authService.sendCredential(email, password)
    .subscribe({
      next: (responseOk) => {
        const { tokenSession, data } = responseOk
        console.log('Sesion iniciada correcta', responseOk);
        this.cookie.set('token', tokenSession, 4, '/')
        this.router.navigate(['/', 'tracks'])
      },
      error: (e) => {
        this.errorSession = true,
        console.log('Ocurrio un error con tu email o password')
      },
      complete: () => {
        console.log('complete');
      },
    })
  }
}
