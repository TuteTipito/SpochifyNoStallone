import { Component, Input, input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { NgFor, NgTemplateOutlet } from '@angular/common';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';
import { OrderListPipe } from '../../pipe/order-list.pipe';

@Component({
    selector: 'app-play-list-body',
    templateUrl: './play-list-body.component.html',
    styleUrl: './play-list-body.component.css',
    imports: [NgFor, NgTemplateOutlet, ImgBrokenDirective, OrderListPipe]
})

export class PlayListBodyComponent {
  @Input() tracks:TrackModel[] = []
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }

  ngOnInit(): void {
    
  }

  changeSort(property:string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property: property,
      order: order == 'asc' ? 'desc' : 'asc'
    }
  }
}
