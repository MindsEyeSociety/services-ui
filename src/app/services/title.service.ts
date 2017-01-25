import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class TitleService {
  private title: String = 'Home';

  public constructor( private titleService: Title ) {}

  public getTitle(): String {
    return this.title;
  }

  public setTitle( newTitle: string ) {
    this.title = newTitle || 'Home';
    this.titleService.setTitle( this.title + ' – Mind\'s Eye Society' );
  }
}
