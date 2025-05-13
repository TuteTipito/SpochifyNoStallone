import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  standalone: false,
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent {
  @Input() mode: 'small' | 'big' = 'big'
  @Input() track!: TrackModel

  constructor(private multimediaService: MultimediaService) { }

  sendPlay(track: TrackModel): void {
    this.multimediaService.trackInfo$.next(track)
  }
}
