import { BackupGroupStatusDescriptorJson } from './__json__/backup-group-status-descriptor-json';
import { BackupConfigStatus } from './__json__/backup-config-status';

/**
 * Backup Group Status Descriptor.
 */
export class BackupGroupStatusDescriptor {

  constructor(private _json: BackupGroupStatusDescriptorJson) {
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get uid.
   * @returns {string}
   */
  get uid(): string {
    return this._json.uid;
  }

  /**
   * Get backup status.
   * @returns {BackupConfigStatus}
   */
  get backupStatus(): BackupConfigStatus {
    return this._json.backup_status;
  }

  /**
   * Get the json representation of this class.
   * @returns {BackupGroupStatusDescriptorJson}
   */
  get json(): BackupGroupStatusDescriptorJson {
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
