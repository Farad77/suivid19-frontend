import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-social-login-container',
  templateUrl: './social-login-container.component.html',
  styleUrls: ['./social-login-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialLoginContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
