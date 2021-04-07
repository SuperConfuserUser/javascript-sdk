import { DailyScheduleJson } from './__json__/daily-schedule-json';
import { Day } from './__json__/day';

/**
 * Daily Schedule.
 */
/* istanbul ignore next: autogenerated */
export class DailySchedule {

  constructor(private _json: DailyScheduleJson) {
  }

  /**
   * Get days.
   * @returns {Array<Day>}
   */
  get days(): Array<Day> {
    return this._json.days;
  }

  /**
   * Get the json representation of this class.
   * @returns {DailyScheduleJson}
   */
  get json(): DailyScheduleJson {
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