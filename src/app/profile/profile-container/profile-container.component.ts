import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
