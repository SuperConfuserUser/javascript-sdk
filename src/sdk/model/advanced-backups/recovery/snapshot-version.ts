import { SnapshotVersionJson } from './__json__/snapshot-version-json';

/**
 * Snapshot Version.
 */
export class SnapshotVersion {

  constructor(private _json: SnapshotVersionJson) {
  }

  /**
   * Get backup run uid.
   * @returns {string}
   */
  get backupRunUid(): string {
    return this._json.backup_run_uid;
  }

  /**
   * Get start time.
   * @returns {number} time in millis
   */
  get startTime(): number {
    return this._json.start_time;
  }

  /**
   * Get delta size bytes.
   * Specifies the size of the data captured from the source object.
   * For a fullbackup (where Change Block Tracking is not utilized) this field is equal tologicalSizeBytes.
   * For an incremental backup (where Change Block Tracking isutilized),
   * this field specifies the size of the data that has changed since the last backup.
   * @returns {number}
   */
  get deltaSizeBytes(): number {
    return this._json.delta_size_bytes;
  }

  /**
   * Get attempt number.
   * Specifies the number of the attempts made by the VCloudProtectionJob Run to capture a snapshot of the object.
   * For example, if an snapshot is successfully captured after three attempts, this field equals 3.
   * @returns {number}
   */
  get attemptNumber(): number {
    return this._json.attempt_number;
  }

  /**
   * Get logical size bytes.
   * Specifies the size of the snapshot if the data is fully hydrated or expanded
   * and not reduced by change-block tracking, compression and deduplication.
   * For example if a VMDK of size 100GB is created with thin provisioning and the disk size to store the VMDK is 20GB.
   * The logical size of this object is 100GB and the physical size is 20GB.
   * @returns {number}
   */
  get logicalSizeBytes(): number {
    return this._json.logical_size_bytes;
  }

  /**
   * Get app consistent.
   * Specifies if an app-consistent snapshot was captured.
   * For example, was the VM was quiesced before the snapshot was captured.
   * @returns {boolean}
   */
  get appConsistent(): boolean {
    return this._json.app_consistent;
  }

  /**
   * Get full backup.
   * Specifies if the snapshot is a full backup.
   * For example, all blocks of the VM is captured and Change Block Tracking is not utilized.
   * @returns {boolean}
   */
  get fullBackup(): boolean {
    return this._json.full_backup;
  }

  /**
   * Get the json representation of this class.
   * @returns {SnapshotVersionJson}
   */
  get json(): SnapshotVersionJson {
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
