import { FaceSnap } from './../models/face-snap.model';

import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  OnSnap!:string;
  faceSnap! : FaceSnap;


  constructor(private faceSnapService:FaceSnapsService,
    private route: ActivatedRoute){}

  ngOnInit() {

    this.OnSnap = "Oh snap!"
    const id = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(id)

  }


  On_snap(){
    if(this.OnSnap==="Oh snap!"){
      this.OnSnap="Oops unSnap!";
      this.faceSnapService.snapById(this.faceSnap.id,'snap');
    }
    else{
      this.OnSnap="Oh snap!";
      this.faceSnapService.snapById(this.faceSnap.id,'unsnap');
    }
  }
}
