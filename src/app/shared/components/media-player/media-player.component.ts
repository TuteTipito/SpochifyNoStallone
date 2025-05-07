import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
/* import { MultimediaService } from '@shared/services/multimedia.service';
 */
@Component({
  selector: 'app-media-player',
  standalone: false,
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent {

/*   constructor(private multimediaService: MultimediaService) { }
 */
  ngOnInit(): void {
/*     const observer1$ = this.multimediaService.callback.subscribe(
     (response: TrackModel) => {

      }
    ) */
  }

/*   ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  } */
}
