import { Component, DestroyRef, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';
import { NgTemplateOutlet, NgIf, NgClass, AsyncPipe } from '@angular/common';
import { destroyCustom } from '@core/utils/destroyCustom';

@Component({
    selector: 'app-media-player',
    templateUrl: './media-player.component.html',
    styleUrl: './media-player.component.css',
    imports: [NgTemplateOutlet, NgIf, NgClass, AsyncPipe]
})

export class MediaPlayerComponent {
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  state: string = 'paused'

  multimediaService = inject(MultimediaService)
  destroyCustom = destroyCustom()

  ngOnInit(): void {
    this.multimediaService.playerStatus$
    .pipe(this.destroyCustom())
    .subscribe(status => this.state = status)
  }

   handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement
    const { clientX } = event
    const { x, width } = elNative.getBoundingClientRect()
    const clickX = clientX - x
    const percentageFromX = (clickX * 100) / width

    this.multimediaService.seekAudio(percentageFromX)
   }
}

