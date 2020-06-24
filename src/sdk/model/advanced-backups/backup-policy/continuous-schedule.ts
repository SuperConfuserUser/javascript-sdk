import { ContinuousScheduleJson } from './__json__/continuous-schedule-json';

/**
 * Continuous Schedule.
 */
export class ContinuousSchedule {

  constructor(private _json: ContinuousScheduleJson) {
  }

  /**
   * Get backup interval in minutes.
   * @returns {number}
   */
  get backupIntervalMins(): number {
    return this._json.backup_interval_mins;
  }

  /**
   * Get the json representation of this class.
   * @returns {ContinuousScheduleJson}
   */
  get json(): ContinuousScheduleJson {
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
