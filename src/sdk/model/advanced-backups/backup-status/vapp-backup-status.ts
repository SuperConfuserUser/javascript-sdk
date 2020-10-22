import { VmBackupStatus } from './vm-backup-status';
import { BackupGroupStatusDescriptor } from './backup-group-status-descriptor';
import { VappBackupStatusJson } from './__json__/vapp-backup-status-json';

/**
 * vApp Backup Status.
 */
export class VappBackupStatus {

  constructor(private _backupStatusJson: VappBackupStatusJson) {
  }

  /**
   * Get uuid.
   * @returns {string}
   */
  get uuid(): string {
    return this._backupStatusJson.uuid;
  }

  /**
   * Get backup groups.
   * @returns {Array<BackupGroupStatusDescriptor>}
   */
  get backupGroups(): Array<BackupGroupStatusDescriptor> {
    return this._backupStatusJson.backup_groups.map(it => new BackupGroupStatusDescriptor(it));
  }

  /**
   * Get child vm statuses.
   * @returns {Array<VmBackupStatus>}
   */
  get childVmStatuses(): Array<VmBackupStatus> {
    return this._backupStatusJson.child_vm_statuses.map(it => new VmBackupStatus(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {VappBackupStatusJson}
   */
  get json(): VappBackupStatusJson {
    return Object.assign({}, this._backupStatusJson);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._backupStatusJson, undefined, 2);
  }
}
