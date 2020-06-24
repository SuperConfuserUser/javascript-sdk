import { TimeOfDayJson } from './__json__/time-of-day-json';

/**
 * Backup Group Disk Unit.
 */
export class TimeOfDay {

  constructor(private _json: TimeOfDayJson) {
  }

  /**
   * Gets an (0-23) hour in a day.
   * @returns {number} hour
   */
  get hour(): number {
    return this._json.hour;
  }

  /**
   * Gets a (0-59) minute in an hour.
   * @returns {number} minute
   */
  get minute(): number {
    return this._json.minute;
  }

  /**
   * Gets the json representation of this class.
   * @returns {TimeOfDayJson}
   */
  get json(): TimeOfDayJson {
    return Object.assign({}, this._json);
  }

  /**
   * Gets the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
