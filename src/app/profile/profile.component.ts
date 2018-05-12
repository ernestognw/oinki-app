import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id = null;
  profile: any = {};

  constructor(private userdataService: UserdataService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.profile = this.userdataService.getProfileData(this.id)
      .valueChanges().subscribe(profile => {
        this.profile = profile;
        console.log(profile);
        this.profile.photoURL = 'https://graph.facebook.com/v3.0/' + this.profile.id + '/picture?type=large';
      });
  }
  ngOnInit() {
  }

}
