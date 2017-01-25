import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

/**
 * Service to fetch configuration values.
 *
 * @export
 * @class ConfigService
 */
@Injectable()
export class ConfigService {

  /**
   * Creates an instance of ConfigService.
   *
   * @memberOf ConfigService
   */
  constructor() { }

  /**
   * Returns the configuration object.
   *
   * @returns {Object}
   *
   * @memberOf ConfigService
   */
  getConfig(): Object {
    return environment.config;
  }

}
