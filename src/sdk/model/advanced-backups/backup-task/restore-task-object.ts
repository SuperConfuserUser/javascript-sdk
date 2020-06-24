import { RestoreTaskObjectJson } from './__JSON__/restore-task-object-json';
import { ProtectionSource } from '../backup-group/protection-source';

/**
 * Restore task object.
 */
export class RestoreTaskObject {

  constructor(private _json: RestoreTaskObjectJson) {
  }

  /**
   * Get backup run uid.
   * @returns {string}
   */
  get backupRunUid(): string {
    return this._json.backup_run_uid;
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
   * @returns {RestoreTaskObjectJson}
   */
  get json(): RestoreTaskObjectJson {
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
