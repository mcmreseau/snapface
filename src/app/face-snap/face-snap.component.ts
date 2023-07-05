import { Component,Input,OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {



  OnSnap!:string;
  @Input() faceSnap! : FaceSnap

  constructor(private faceSnapService:FaceSnapsService,
              private route: Router){}

  ngOnInit() {

    this.OnSnap = "Oh snap!"

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

  onViewFaceSnap() {
      this.route.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
    }
}
