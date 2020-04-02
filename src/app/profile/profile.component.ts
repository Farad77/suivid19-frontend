import { Component, OnInit, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { Admin } from '../_models/Admin'
import { Observable } from 'rxjs';
import { UserService } from '../_services/user/user.service';
import { User } from '../_models/User';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
  users = [];
  constructor( private _userServices: UserService) { }

  ngOnInit() {
    this._userServices.getUsers().subscribe(data => {this.users = data; console.log(this.users) });
  }

}
