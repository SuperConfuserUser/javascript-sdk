import { BlackoutPeriodJson } from './__json__/blackout-period-json';
import { Day } from './__json__/day';
import { TimeOfDay } from '../backup-group/time-of-day';

/**
 * Blackout Period.
 */
/* istanbul ignore next: autogenerated */
export class BlackoutPeriod {

  constructor(private _json: BlackoutPeriodJson) {
  }

  /**
   * Get day.
   * @returns {Day | null}
   */
  get day(): Day | null {
    return this.json.day || null;
  }

  /**
   * Get end time.
   * @returns {TimeOfDay}
   */
  get endTime(): TimeOfDay {
    return new TimeOfDay(this._json.end_time);
  }

  /**
   * Get start time.
   * @returns {TimeOfDay}
   */
  get startTime(): TimeOfDay {
    return new TimeOfDay(this._json.start_time);
  }

  /**
   * Get the json representation of this class.
   * @returns {BlackoutPeriodJson}
   */
  get json(): BlackoutPeriodJson {
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