import { BackupGroupDiskUnitJson } from './__json__/backup-group-disk-unit-json';

/**
 * Backup Group Disk Unit.
 */
export class BackupGroupDiskUnit {

  constructor(private _json: BackupGroupDiskUnitJson) {
  }

  /**
   * Gets the Id of the controller bus that controls the disk.
   * @returns {number} bus number
   */
  get busNumber(): number {
    return this._json.bus_number;
  }

  /**
   * Gets the controller type like SCSI, or IDE etc.
   * @returns {string} controller type
   */
  get controllerType(): string {
    return this._json.controller_type;
  }

  /**
   * Gets the disk file name. This is the VMDK name and not the flat file name.
   * @returns {number} unit number
   */
  get unitNumber(): number {
    return this._json.unit_number;
  }

  /**
   * Gets the json representation of this class.
   * @returns {BackupGroupDiskUnitJson}
   */
  get json(): BackupGroupDiskUnitJson {
    return Object.assign({}, this._json);
  }

  /**
   * Gets the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
