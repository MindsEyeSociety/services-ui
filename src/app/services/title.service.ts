import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

/**
 * Service designed to handle the title of the current page.
 *
 * @export
 * @class TitleService
 */
@Injectable()
export class TitleService {
  /**
   * The current Title.
   *
   * @private
   * @type {String}
   * @memberOf TitleService
   */
  private title: String = 'Home';

  /**
   * Creates an instance of TitleService.
   *
   * @param {Title} titleService
   *
   * @memberOf TitleService
   */
  public constructor( private titleService: Title ) {}

  /**
   * Gets the current title.
   *
   * @returns {String}
   *
   * @memberOf TitleService
   */
  public getTitle(): String {
    return this.title;
  }

  /**
   * Sets the current Title.
   *
   * @param {string} newTitle
   *
   * @memberOf TitleService
   */
  public setTitle( newTitle: string ) {
    this.title = newTitle || 'Home';
    this.titleService.setTitle( this.title + ' – Mind\'s Eye Society' );
  }
}
