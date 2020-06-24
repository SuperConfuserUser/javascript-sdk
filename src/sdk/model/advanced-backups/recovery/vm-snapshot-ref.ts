import { VmSnapshotRefJson } from './__json__/vm-snapshot-ref-json';

/**
 * VM Snapshot Ref.
 */
export class VmSnapshotRef {

  constructor(private _json: VmSnapshotRefJson) {
  }

  /**
   * Get vm uuid.
   * @returns {string}
   */
  get vmUuid(): string {
    return this._json.vm_uuid;
  }

  /**
   * Get backup run uid.
   * @returns {string}
   */
  get backupRunUid(): string {
    return this._json.backup_run_uid;
  }

  /**
   * Get the json representation of this class.
   * @returns {VmSnapshotRefJson}
   */
  get json(): VmSnapshotRefJson {
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
