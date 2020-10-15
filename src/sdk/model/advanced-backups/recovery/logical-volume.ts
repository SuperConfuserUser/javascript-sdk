import { DeviceTreeDetails } from './device-tree-details';
import { LogicalVolumeJson } from './__json__/logical-volume-json';

/**
 * Logical volume.
 */
export class LogicalVolume {

  constructor(private _json: LogicalVolumeJson) {
  }

  /**
   * Get device root node.
   * @returns {DeviceTreeDetails}
   */
  get deviceRootNode(): DeviceTreeDetails {
    return new DeviceTreeDetails(this._json.device_root_node);
  }

  /**
   * Get group name.
   * @returns {string}
   */
  get groupName(): string {
    return this._json.group_name;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get group uuid.
   * @returns {string}
   */
  get groupUuid(): string {
    return this._json.group_uuid;
  }

  /**
   * Get uuid.
   * @returns {string}
   */
  get uuid(): string {
    return this._json.uuid;
  }

  /**
   * Get the json representation of this class.
   * @returns {LogicalVolumeJson}
   */
  get json(): LogicalVolumeJson {
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
