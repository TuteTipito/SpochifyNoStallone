import { TrackModel } from "@core/models/tracks.model";

export const MOCK_TRACK: TrackModel = {
  name: 'Canción de Boca',
  album: 'Bombonera Hits',
  cover: 'https://fake-url.com/cover.jpg',
  url: 'https://fake-url.com/audio.mp3',
  _id: '1',
  artist: {
    name: 'La Doce',
    nickname: 'Jugador N°12',
    nationality: 'Argentina'
  }
};
