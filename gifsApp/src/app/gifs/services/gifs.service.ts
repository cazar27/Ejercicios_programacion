import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


  private _historial: string [] = [];

  constructor() { }

  get histrorial() {
    return [...this._historial];
  }

  buscarGifs ( query: string ) {
    this._historial.unshift( query );
    console.log(this._historial);
  }
}
