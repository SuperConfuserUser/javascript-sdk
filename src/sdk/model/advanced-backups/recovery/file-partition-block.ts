import { FilePartitionBlockJson } from './__json__/file-partition-block-json';

/**
 * File partition block.
 */
export class FilePartitionBlock {

  constructor(private _json: FilePartitionBlockJson) {
  }

  /**
   * Get number.
   * @returns {number}
   */
  get number(): number {
    return this._json.number;
  }

  /**
   * Get disk file name.
   * @returns {string}
   */
  get diskFileName(): string {
    return this._json.disk_file_name;
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
