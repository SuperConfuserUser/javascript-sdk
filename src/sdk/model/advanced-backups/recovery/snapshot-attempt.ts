import { SnapshotAttemptJson } from './__json__/snapshot-attempt-json';

/**
 * Snapshot attempt.
 */
export class SnapshotAttempt {

  constructor(private _json: SnapshotAttemptJson) {
  }

  /**
   * Get backup run uid.
   * @returns {string}
   */
  get backupRunUid(): string {
    return this._json.backup_run_uid;
  }

  /**
   * Get backup group uid.
   * @returns {string}
   */
  get backupGroupUid(): string {
    return this._json.backup_group_uid;
  }

  /**
   * Get attempt number.
   * @returns {number}
   */
  get attemptNumber(): number {
    return this._json.attempt_number;
  }

  /**
   * Get backup run start time.
   * @returns {number}
   */
  get backupRunStartTime(): number {
    return this._json.backup_run_start_time;
  }

  /**
   * Get the json representation of this class.
   * @returns {SnapshotAttemptJson}
   */
  get json(): SnapshotAttemptJson {
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
