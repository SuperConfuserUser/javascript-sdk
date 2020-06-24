import { SnapshotVersion } from './snapshot-version';
import { VmBackupSnapshotJson } from './__json__/vm-backup-snapshot-json';

/**
 * VM Backup Snapshot.
 */
export class VmBackupSnapshot {

  constructor(private _json: VmBackupSnapshotJson) {
  }

  /**
   * Get backup group uid.
   * @returns {string}
   */
  get backupGroupUid(): string {
    return this._json.backup_group_uid;
  }

  /**
   * Get VM uuid.
   * @returns {string}
   */
  get vmUuid(): string {
    return this._json.vm_uuid;
  }

  /**
   * Get company ID.
   * @returns {string}
   */
  get companyId(): string {
    return this._json.company_id;
  }

  /**
   * Get versions.
   * @returns {Array<SnapshotVersion>}
   */
  get versions(): Array<SnapshotVersion> {
    return this._json.versions.map(it => new SnapshotVersion(it));
  }

  /**
   * Get OS type.
   * @returns {string}
   */
  get osType(): string {
    return this._json.os_type;
  }

  /**
   * Get backup group name.
   * @returns {string}
   */
  get backupGroupName(): string {
    return this._json.backup_group_name;
  }

  /**
   * Get vApp uuid.
   * @returns {string}
   */
  get vappUuid(): string {
    return this._json.vapp_uuid;
  }

  /**
   * Get org uuid.
   * @returns {string}
   */
  get orgUuid(): string {
    return this._json.org_uuid;
  }

  /**
   * Get vDC uuid.
   * @returns {string}
   */
  get vdcUuid(): string {
    return this._json.vdc_uuid;
  }

  /**
   * Get location id.
   * @returns {string}
   */
  get locationId(): string {
    return this._json.location_id;
  }

  /**
   * Get VM name.
   * @returns {string}
   */
  get vmName(): string {
    return this._json.vm_name;
  }

  /**
   * Get the json representation of this class.
   * @returns {VmBackupSnapshotJson}
   */
  get json(): VmBackupSnapshotJson {
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
