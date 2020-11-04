import { FilePartitionBlockJson } from './__json__/file-partition-block-json';

/**
 * File partition block.
 */
export class FilePartitionBlock {

  constructor(private _json: FilePartitionBlockJson) {
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
   * Get disk file name.
   * Specifies the disk file name where the logical partition is.
   * @returns {string}
   */
  get diskFileName(): string {
    return this._json.disk_file_name;
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
   * Get the json representation of this class.
   * @returns {FilePartitionBlockJson}
   */
  get json(): FilePartitionBlockJson {
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
