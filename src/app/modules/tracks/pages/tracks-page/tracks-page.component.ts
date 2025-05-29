import { Component, inject, Input, input, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { getAllRandom$, getAllTracks$, TrackService } from '@modules/tracks/services/track.service';
import { SectionGenericComponent } from '../../../../shared/components/section-generic/section-generic.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tracks-page',
    templateUrl: './tracks-page.component.html',
    styleUrl: './tracks-page.component.css',
    imports: [SectionGenericComponent, CommonModule]
})
export class TracksPageComponent {
@Input() currentUser: any;
@Input() category: any;


  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  
  constructor() {
    getAllTracks$().subscribe((response: TrackModel[]) => {
      this.tracksTrending = response
    })
    getAllRandom$().subscribe((response: TrackModel[]) => {
      this.tracksRandom = response
    })
  }
}