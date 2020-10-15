import { DiskBlockJson } from './__json__/disk-block-json';

/**
 * Disk block.
 */
export class DiskBlock {

  constructor(private _json: DiskBlockJson) {
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
   * @returns {DiskBlockJson}
   */
  get json(): DiskBlockJson {
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
