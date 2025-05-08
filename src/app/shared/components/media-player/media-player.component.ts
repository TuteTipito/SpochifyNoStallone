import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  standalone: false,
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  listObserver$: Array<Subscription> = []

  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer1$ = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {

      }
    )
    this.listObserver$ = [observer1$]
  }

  ngOnDestroy(): void { 
    this.listObserver$.forEach(u => u.unsubscribe())
   }
}
