import { VappBackupStatus } from './vapp-backup-status';
import { VappBackupStatusDetailJson } from './__json__/vapp-backup-status-detail-json';

/**
 * vApp backup status detail.
 */
export class VappBackupStatusDetail extends VappBackupStatus {

  constructor(private _json: VappBackupStatusDetailJson) {
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
   * @returns {VappBackupStatusDetailJson}
   */
  get json(): VappBackupStatusDetailJson {
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
