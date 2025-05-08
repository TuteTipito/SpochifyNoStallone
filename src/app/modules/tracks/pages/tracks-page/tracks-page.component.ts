import { Component, OnDestroy, OnInit } from '@angular/core';
/* import * as dataRaw from '../../../../data/tracks.json' */
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  standalone: false,
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

/*   listObservers$: Array<Subscription> = [] */

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
/*     const observer1$ = this.trackService.dataTracksTrending$
    .subscribe(response => {
      this.tracksTrending = response
      this.tracksRandom = response
    })

    const observer2$ = this.trackService.dataTracksRandom$
    .subscribe(response => {
      this.tracksRandom = [ ... this.tracksRandom, ... response]
    })

    this.listObservers$ = [observer1$, observer2$] */


    this.loadDataAll()
    this.loadDataRamdom()

  }

  loadDataAll(): void {
    this.trackService.getAllTracks$().subscribe((response: TrackModel[]) => {
      this.tracksTrending = response
    })
  }

  loadDataRamdom(): void {
    this.trackService.getAllRandom$().subscribe((response: TrackModel[]) => {
      this.tracksRandom = response
    })
  }

  ngOnDestroy(): void {
/*     this.listObservers$.forEach(u => u.unsubscribe()) */
  }
}
