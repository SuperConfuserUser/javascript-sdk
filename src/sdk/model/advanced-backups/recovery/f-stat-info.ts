import { FStatInfoJson } from './__json__/f-stat-info-json';

/**
 * F Stat Info.
 */
export class FStatInfo {

  constructor(private _json: FStatInfoJson) {
  }

  /**
   * Get modified time.
   * @returns {number}
   */
  get modifiedTime(): number {
    return this._json.modified_time;
  }

  /**
   * Get size.
   * @returns {number}
   */
  get size(): number {
    return this._json.size;
  }

  /**
   * Get the json representation of this class.
   * @returns {FStatInfoJson}
   */
  get json(): FStatInfoJson {
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
