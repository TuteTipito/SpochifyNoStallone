import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';
import { SearchComponent } from '../../components/search/search.component';
import { PlayListBodyComponent } from '../../../../shared/components/play-list-body/play-list-body.component';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-history-page',
    templateUrl: './history-page.component.html',
    styleUrl: './history-page.component.css',
    imports: [SearchComponent, PlayListBodyComponent, AsyncPipe]
})
export class HistoryPageComponent implements OnInit {

  listResults$: Observable<any> = of([])

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  
  } 

  receiveData(event: string): void {
    this.listResults$ = this.searchService.searchTracks$(event)
  }
}
