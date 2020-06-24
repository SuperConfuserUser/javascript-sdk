import { SchedulingPolicyJson } from './__json__/scheduling-policy-json';
import { ContinuousSchedule } from './continuous-schedule';
import { DailySchedule } from './daily-schedule';
import { MonthlySchedule } from './monthly-schedule';
import { Periodicity } from './__json__/periodicity';

/**
 * Scheduling Policy.
 */
export class SchedulingPolicy {

  constructor(private _json: SchedulingPolicyJson) {
  }

  /**
   * Get continuous schedule.
   * @returns {ContinuousSchedule | null}
   */
  get continuousSchedule(): ContinuousSchedule | null {
    return this._json.continuous_schedule
      ? new ContinuousSchedule(this._json.continuous_schedule)
      : null;
  }

  /**
   * Get daily schedule.
   * @returns {DailySchedule | null}
   */
  get dailySchedule(): DailySchedule | null {
    return this._json.daily_schedule
      ? new DailySchedule(this._json.daily_schedule)
      : null;
  }

  /**
   * Get monthly schedule.
   * @returns {MonthlySchedule | null}
   */
  get monthlySchedule(): MonthlySchedule | null {
    return this._json.monthly_schedule
      ? new MonthlySchedule(this._json.monthly_schedule)
      : null;
  }

  /**
   * Get periodicity.
   * @returns {Periodicity}
   */
  get periodicity(): Periodicity {
    return this._json.periodicity;
  }

  /**
   * Get the json representation of this class.
   * @returns {SchedulingPolicyJson}
   */
  get json(): SchedulingPolicyJson {
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
