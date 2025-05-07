import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-tracks-page',
  standalone: false,
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit {
  mockTrackList: Array<TrackModel> = [

  ]

  constructor() { }

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default 
    this.mockTrackList = data
  }
}
