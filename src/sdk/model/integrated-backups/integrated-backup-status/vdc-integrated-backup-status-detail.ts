import { VdcIntegratedBackupStatus } from './vdc-integrated-backup-status';
import { VdcIntegratedBackupStatusDetailJson } from './__json__/vdc-integrated-backup-status-detail-json';

/**
 * vDC Integrated Backup Status Detail.
 */
/* istanbul ignore next: autogenerated */
export class VdcIntegratedBackupStatusDetail extends VdcIntegratedBackupStatus {

  constructor(private _json: VdcIntegratedBackupStatusDetailJson) {
    super(_json);
  }

  /**
   * Get whether the vDC has the integrated backups offering.
   * @returns {boolean}
   */
  get hasIntegratedBackups(): boolean {
    return this._json.has_integrated_backups;
  }

  /**
   * Get the json representation of this class.
   * @returns {VdcIntegratedBackupStatusDetailJson}
   */
  get json(): VdcIntegratedBackupStatusDetailJson {
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
