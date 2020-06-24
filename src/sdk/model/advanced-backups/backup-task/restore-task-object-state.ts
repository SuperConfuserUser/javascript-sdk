import { RestoreTaskObjectStateJson } from './__JSON__/restore-task-object-state-json';
import { RestoreTaskObjectStatus } from './__JSON__/restore-task-object-status-enum';
import { ProtectionSource } from '../backup-group/protection-source';

/**
 * Restore task object state.
 */
export class RestoreTaskObjectState {

  constructor(private _json: RestoreTaskObjectStateJson) {
  }

  /**
   * Get status.
   * @returns {RestoreTaskObjectStatus}
   */
  get status(): RestoreTaskObjectStatus {
    return this._json.status;
  }

  /**
   * Get error.
   * @returns {string | null}
   */
  get error(): string | null {
    return this._json.error || null;
  }

  /**
   * Get source.
   * @returns {ProtectionSource}
   */
  get source(): ProtectionSource {
    return new ProtectionSource(this._json.source);
  }

  /**
   * Get the json representation of this class.
   * @returns {RestoreTaskObjectStateJson}
   */
  get json(): RestoreTaskObjectStateJson {
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
