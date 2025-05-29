import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { catchError, map, mergeMap, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
/* import * as dataRaw from '../../../data/tracks.json' */

const URL = environment.api;

@Injectable({
  providedIn: 'root'
})
export class TrackService {

/*   dataTracksTrending$:Observable<TrackModel[]> = of([])
  dataTracksRandom$:Observable<any> = of([]) */

/*   constructor(private httpClient: HttpClient) { */
    /*     const { data }: any = (dataRaw as any).default 
    this.dataTracksTrending$ = of(data)

    this.dataTracksRandom$ = new Observable((observer) => {
      const trackExample: TrackModel = {
        _id: 9,
        name: 'Leve',
        album: 'Cartel de Santa',
        url: '',
        cover: ''
      }

      setTimeout(() => {
        observer.next([trackExample])
      }, 3500)
    }) */
/*   } */
}

  export const getAllTracks$ =  (): Observable<any> => {
    return inject(HttpClient).get(`${URL}/tracks`, /* {
      headers: new HttpHeaders ({ authorization: 'Bearer TOKEN' })
    } */).pipe(
      map(({ data }: any) => {
        return data
      })
    )
  }

  export const getAllRandom$ = (): Observable<any> => {
    return inject(HttpClient).get(`${URL}/tracks`).pipe(
      mergeMap(({ data }: any) => skipById(data, 1)),
/*       map((dataRevertida) => {
        return dataRevertida.filter((track: TrackModel) => track._id != 1)
      }) */
      tap(data => console.log(data)),
      catchError((error) => {
        const { status, statusText } = error;
        console.log('Error de conexion', [status, statusText]);
        return of([])
      })
    )
  }

  export const skipById = (listTracks: TrackModel[], id: number): Promise<TrackModel[]> => {
    return new Promise((resolve, reject) => {
      const listTemp = listTracks.filter(a => a._id != id)
      resolve(listTemp)
    })
  }