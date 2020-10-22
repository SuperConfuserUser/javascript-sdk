import { VmBackupStatus } from './vm-backup-status';
import { VmBackupStatusDetailJson } from './__json__/vm-backup-status-detail-json';

/**
 * VM backup status detail.
 */
export class VmBackupStatusDetail extends VmBackupStatus {

  constructor(private _json: VmBackupStatusDetailJson) {
    super(_json);
  }

  /**
   * Get has advanced backups.
   * Whether the vApp has the advanced backups offering.
   * @returns {boolean}
   */
  get hasAdvancedBackups(): boolean {
    return this._json.has_advanced_backups;
  }

  /**
   * Get the json representation of this class.
   * @returns {VmBackupStatusDetailJson}
   */
  get json(): VmBackupStatusDetailJson {
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
