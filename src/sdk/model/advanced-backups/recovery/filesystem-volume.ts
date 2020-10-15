import { FilesystemVolumeJson } from './__json__/filesystem-volume-json';
import { LogicalVolumeType } from './__json__/logical-volume-type-enum';
import { Disk } from './disk';
import { LogicalVolume } from './logical-volume';

/**
 * Filesystem volume.
 */
export class FilesystemVolume {

  constructor(private _json: FilesystemVolumeJson) {
  }

  /**
   * Get is supported.
   * @returns {boolean}
   */
  get isSupported(): boolean {
    return this._json.is_supported;
  }

  /**
   * Get disks.
   * @returns {Array<Disk>}
   */
  get disks(): Array<Disk> {
    return this._json.disks.map(it => new Disk(it));
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get logical volume.
   * @returns {LogicalVolume | null}
   */
  get logicalVolume(): LogicalVolume | null {
    return this._json.logical_volume ? new LogicalVolume(this._json.logical_volume) : null;
  }

  /**
   * Get logical volume type.
   * @returns {LogicalVolumeType}
   */
  get logicalVolumeType(): LogicalVolumeType {
    return this._json.logical_volume_type;
  }

  /**
   * Get display name.
   * @returns {string}
   */
  get displayName(): string {
    return this._json.display_name;
  }

  /**
   * Get filesystem uuid.
   * @returns {string}
   */
  get filesystemUuid(): string {
    return this._json.filesystem_uuid;
  }

  /**
   * Get filesystem type.
   * @returns {string}
   */
  get filesystemType(): string {
    return this._json.filesystem_type;
  }

  /**
   * Get the json representation of this class.
   * @returns {FilesystemVolumeJson}
   */
  get json(): FilesystemVolumeJson {
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
