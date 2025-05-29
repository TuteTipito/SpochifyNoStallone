import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { NgIf, NgClass } from '@angular/common';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';

@Component({
    selector: 'app-card-player',
    templateUrl: './card-player.component.html',
    styleUrl: './card-player.component.css',
    imports: [NgIf, NgClass, ImgBrokenDirective]
})
export class CardPlayerComponent {
  @Input({required:true}) mode: 'small' | 'big' = 'big'
  @Input({required:true}) track!: TrackModel

  constructor(private multimediaService: MultimediaService) { }

  sendPlay(track: TrackModel): void {
    this.multimediaService.trackInfo$.next(track)
  }
}
