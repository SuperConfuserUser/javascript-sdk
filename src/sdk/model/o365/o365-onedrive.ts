import { O365OneDriveJson } from './__json__/o365-onedrive-json';

/**
 * O365 OneDrive Item
 */
/* istanbul ignore next: autogenerated */
export class O365OneDrive {

  constructor(private _json: O365OneDriveJson) {
  }

  /**
   * Gets the id of the OneDrive item
   */
  get id(): string {
    return this._json.id;
  }

  /**
   * Gets the name of the OneDrive item
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Gets the url of the OneDrive item
   */
  get url(): string {
    return this._json.url;
  }

  /**
   * Get the json representation of this class.
   * @returns {O365OneDriveJson}
   */
  get json(): O365OneDriveJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
