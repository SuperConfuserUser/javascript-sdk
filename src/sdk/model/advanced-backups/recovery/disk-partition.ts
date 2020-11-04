import { DiskPartitionJson } from './__json__/disk-partition-json';

/**
 * Disk partition.
 */
export class DiskPartition {

  constructor(private _json: DiskPartitionJson) {
  }

  /**
   * Get number.
   * Specifies a unique number of the partition within the linear disk file.
   * @returns {number}
   */
  get number(): number {
    return this._json.number;
  }

  /**
   * Get type uuid.
   * Specifies the partition type uuid.
   * If disk is unpartitioned, this field isnot set.
   * If disk is MBR partitioned, this field is set to a partition type.
   * If disk is GPT partitioned, this field is set to a partition type GUID.
   * @returns {string}
   */
  get typeUuid(): string {
    return this._json.type_uuid;
  }

  /**
   * Get offset bytes.
   * Specifies the offset of the block (in bytes) from the beginning of the
   * containing object such as a physical disk or a virtual disk file.
   * @returns {number}
   */
  get offsetBytes(): number {
    return this._json.offset_bytes;
  }

  /**
   * Get length bytes.
   * Specifies the length of the block in bytes.
   * @returns {number}
   */
  get lengthBytes(): number {
    return this._json.length_bytes;
  }

  /**
   * Get uuid.
   * Specifies the partition uuid.
   * If disk is unpartitioned, this field is not set.
   * If disk is MBR partitioned, this field is not set.
   * If disk is GPT partitioned, this field is set to a partition GUID.
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
