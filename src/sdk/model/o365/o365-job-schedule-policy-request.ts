import { O365JobSchedulePolicyRequestJson } from './__json__/o365-job-schedule-policy-request-json';
import {
    O365JobSchedulePolicyDailyType,
    O365JobSchedulePolicyPeriodicallyEvery,
    O365JobSchedulePolicyType
} from './__json__/o365-job-json';

/**
 * O365 Job Schedule Policy Request
 */
/* istanbul ignore next: autogenerated */
export class O365JobSchedulePolicyRequest {

  constructor(private _json: O365JobSchedulePolicyRequestJson) {
  }

  /**
   * Gets the specified the job schedule type. e.g Daily or Periodically
   * @returns {O365JobSchedulePolicyType}
   */
  get policyType(): O365JobSchedulePolicyType {
    return this._json.policy_type;
  }

  /**
   * Gets the daily type specifying the days when the backup job will run. Required if policyType is Daily.
   * @returns {O365JobSchedulePolicyDailyType | null}
   */
  get dailyType(): O365JobSchedulePolicyDailyType | null {
    return this._json.daily_type || null;
  }

  /**
   * Gets the daily time specifying the time when the job will start. Required if policyType is Daily.
   * @returns {string | null}
   */
  get dailyTime(): string | null {
    return this._json.daily_time || null;
  }

  /**
   * Gets the periodically every time specifying the time interval between the job runs.
   * Required if policyType is Periodically.
   * @returns {O365JobSchedulePolicyPeriodicallyEvery | null}
   */
  get periodicallyEvery(): O365JobSchedulePolicyPeriodicallyEvery | null {
    return this._json.periodically_every || null;
  }

  /**
   * Gets the retry enabled of O365 Job, if set to True, indicates that Veeam Backup for Microsoft Office 365 will
   * attempt to restart a backup job if it fails for some reason.
   * @returns {boolean}
   */
  get isRetryEnabled(): boolean {
    return this._json.is_retry_enabled;
  }

  /**
   * Get the retry number that specifies the number of attempts to run the backup job if retry is enabled.
   * @returns {number}
   */
  get retryNumber(): number {
    return this._json.retry_number;
  }

  /**
   * Gets the retry wait interval specifying the time intervals between the job retry attempts (minutes).
   * @returns {number}
   */
  get retryWaitInterval(): number {
    return this._json.retry_wait_interval;
  }

  /**
   * Get the json representation of this class.
   * @returns {O365JobSchedulePolicyRequestJson}
   */
  get json(): O365JobSchedulePolicyRequestJson {
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
