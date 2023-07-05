import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService{


  mySnaps: FaceSnap[] = [{
    id:1,
    title: 'Archibald',
    description: 'Mon meilleur ami depuis tout petit !',
    imageUrl: 'https://th.bing.com/th/id/R.58a9e73760dc8afd797abcbad3c57fd0?rik=JdArfuDjtXb%2bFQ&pid=ImgRaw&r=0',
    createdDate: new Date(),
    snaps: 0
  }, {
    id:2,
    title: 'Un bon repas',
    description: 'Mmmh que c\'est bon !',
    imageUrl: 'https://thumbs.dreamstime.com/b/apparence-d-ours-de-nounours-16166103.jpg',
    createdDate: new Date(),
    snaps: 150,
    location: "Paris"
  }, {
    id:3,
    title: 'Un bon repas',
    description: 'Mmmh que c\'est bon !',
    imageUrl: 'https://thumbs.dreamstime.com/b/apparence-d-ours-de-nounours-16166103.jpg',
    createdDate: new Date(),
    snaps: 150,
    location: "Paris"
  }, {
    id:4,
    title: 'Un bon repas',
    description: 'Mmmh que c\'est bon !',
    imageUrl: 'https://thumbs.dreamstime.com/b/apparence-d-ours-de-nounours-16166103.jpg',
    createdDate: new Date(),
    snaps: 150,
    location: "Paris"
  }, {
    id:5,
    title: 'Un bon repas',
    description: 'Mmmh que c\'est bon !',
    imageUrl: 'https://thumbs.dreamstime.com/b/apparence-d-ours-de-nounours-16166103.jpg',
    createdDate: new Date(),
    snaps: 150,
    location: "Paris"
  }]

 getFaceSnaps(): FaceSnap[]{
  return this.mySnaps;
 }

 getFaceSnapById(id:number):FaceSnap{
  const facesnap = this.mySnaps.find(f=>f.id==id);
  if (facesnap)return facesnap;
  else throw new Error(" FaceSnap Not found");
 }

 snapById(id:number,snapType:'snap' | 'unsnap'):void{
  const faceSnap = this.getFaceSnapById(id);
  snapType === 'snap'? faceSnap.snaps++ : faceSnap.snaps--;
 }


}
