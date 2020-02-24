import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router'
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName:string;
  passWord:string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  login() {
    if( isNullOrUndefined(this.userName) || isNullOrUndefined(this.passWord)) {
      alert('请输入用户名和密码')
      return
    }
    this.router.navigateByUrl('home')
  }

}
