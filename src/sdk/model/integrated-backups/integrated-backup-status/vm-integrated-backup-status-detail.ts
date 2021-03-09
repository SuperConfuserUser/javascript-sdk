import { VmIntegratedBackupStatus } from './vm-integrated-backup-status';
import { VmIntegratedBackupStatusDetailJson } from './__json__/vm-integrated-backup-status-detail-json';

/**
 * VM Integrated Backup Status Detail.
 */
/* istanbul ignore next: autogenerated */
export class VmIntegratedBackupStatusDetail extends VmIntegratedBackupStatus {

  constructor(private _json: VmIntegratedBackupStatusDetailJson) {
    super(_json);
  }

  /**
   * Whether the VM belongs to a vDC that has the integrated backups offering.
   * @returns {boolean}
   */
  get hasIntegratedBackups(): boolean {
    return this._json.has_integrated_backups;
  }

  /**
   * Get the json representation of this class.
   * @returns {VmIntegratedBackupStatusDetailJson}
   */
  get json(): VmIntegratedBackupStatusDetailJson {
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