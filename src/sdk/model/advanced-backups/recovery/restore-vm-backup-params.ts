import { RestoreVmBackupParamsJson } from './__json__/restore-vm-backup-params-json';
import { AlternateVappParams } from './alternate-vapp-params';

/**
 * Restore VM Backup params.
 */
export class RestoreVmBackupParams {

  constructor(private _json: RestoreVmBackupParamsJson) {
  }
  /**
   * Get backup run uid.
   * @returns {string}
   */
  get backupRunUid(): string {
    return this._json.backup_run_uid;
  }

  /**
   * Get task name.
   * The user-specified name that should be associated with the task.
   * @returns {string}
   */
  get taskName(): string {
    return this._json.task_name;
  }

  /**
   * Get alternate vApp.
   * Optionally specifies an alternate vApp to recover the VM snapshot to.
   * @returns {AlternateVappParams | null}
   */
  get alternateVapp(): AlternateVappParams | null {
    return this._json.alternate_vapp ? new AlternateVappParams(this._json.alternate_vapp) : null;
  }

  /**
   * Get powered on.
   * Specifies the power state of the cloned or recovered objects.
   * By default, the cloned or recovered objects are powered off.
   * @returns {boolean}
   */
  get poweredOn(): boolean {
    return this._json.powered_on;
  }

  /**
   * Get prefix.
   * Specifies a prefix to prepended to the source object name to derive a new
   * name for the recovered or cloned object. By default, cloned or recovered
   * objects retain their original name. Length of this field is limited to 8
   * characters.
   * @returns {string}
   */
  get prefix(): string {
    return this._json.prefix;
  }

  /**
   * Get suffix.
   * Specifies a suffix to appended to the original source object name to derive
   * a new name for the recovered or cloned object. By default, cloned or
   * recovered objects retain their original name. Length of this field is
   * limited to 8 characters.
   * @returns {string}
   */
  get suffix(): string {
    return this._json.suffix;
  }

  /**
   * Get continue on error.
   * Whether the restoration should continue when an error occurs.
   * @returns {boolean}
   */
  get continueOnError(): boolean {
    return this._json.continue_on_error;
  }

  /**
   * Get the json representation of this class.
   * @returns {RestoreVmBackupParamsJson}
   */
  get json(): RestoreVmBackupParamsJson {
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
