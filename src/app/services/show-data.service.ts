import { Injectable } from '@angular/core';
import { Show } from '../model/show';

@Injectable()
export class ShowDataService {
  shows: Show[] = [];

  constructor() {
    this.shows.push(new Show(1, 'How i met your Mom'));
    this.shows.push(new Show(2, 'The Witcher'));
  }
  saveShow(show: Show) {
    this.shows.push(show);
  }
}
