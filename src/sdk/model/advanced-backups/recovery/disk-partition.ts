import { DiskPartitionJson } from './__json__/disk-partition-json';

/**
 * Disk partition.
 */
export class DiskPartition {

  constructor(private _json: DiskPartitionJson) {
  }

  /**
   * Get number.
   * @returns {number}
   */
  get number(): number {
    return this._json.number;
  }

  /**
   * Get type uuid.
   * @returns {string}
   */
  get typeUuid(): string {
    return this._json.type_uuid;
  }

  /**
   * Get offset bytes.
   * @returns {number}
   */
  get offsetBytes(): number {
    return this._json.offset_bytes;
  }

  /**
   * Get length bytes.
   * @returns {number}
   */
  get lengthBytes(): number {
    return this._json.length_bytes;
  }

  /**
   * Get uuid.
   * @returns {string | null}
   */
  get uuid(): string | null {
    return this._json.uuid || null;
  }

  /**
   * Get the json representation of this class.
   * @returns {DiskPartitionJson}
   */
  get json(): DiskPartitionJson {
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
