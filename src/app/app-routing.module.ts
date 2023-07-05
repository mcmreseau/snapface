import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { NgModule } from "@angular/core";
import { RouterModule,Routes } from '@angular/router';
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";



const routes:Routes = [
    { path: '', component : LandingPageComponent},
    { path: 'facesnaps', component : FaceSnapListComponent},
    { path: 'facesnaps/:id', component : SingleFaceSnapComponent}

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
