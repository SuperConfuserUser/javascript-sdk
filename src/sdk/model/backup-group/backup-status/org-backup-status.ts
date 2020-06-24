import { VdcBackupStatus } from './vdc-backup-status';
import { OrgBackupStatusJson } from './__json__/org-backup-status-json';

/**
 * Org Backup Status.
 */
export class OrgBackupStatus {

  constructor(private _json: OrgBackupStatusJson) {
  }

  /**
   * Get uuid.
   * @returns {string}
   */
  get uuid(): string {
    return this._json.uuid;
  }

  /**
   * Get child vDC statuses.
   * @returns {Array<VdcBackupStatus>}
   */
  get childVdcStatuses(): Array<VdcBackupStatus> {
    return this._json.child_vdc_statuses.map(it => new VdcBackupStatus(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {OrgBackupStatusJson}
   */
  get json(): OrgBackupStatusJson {
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
