import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  authStatus:boolean;
  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }
  onSignIn(){
    this.authService.signIn().then(
      () => {
        console.log("sign in successfull");
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['collections'])
      }
    );
  }
  onSignOut(){
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
