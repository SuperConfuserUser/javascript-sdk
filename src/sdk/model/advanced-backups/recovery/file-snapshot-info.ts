import { FileSnapshotInfoJson } from './__json__/file-snapshot-info-json';
import { SnapshotAttempt } from './snapshot-attempt';

/**
 * File snapshot info.
 */
export class FileSnapshotInfo {

  constructor(private _json: FileSnapshotInfoJson) {
  }

  /**
   * Get modified time.
   * @returns {number | null}
   */
  get modifiedTime(): number | null {
    return this._json.modified_time || null;
  }

  /**
   * Get size bytes.
   * @returns {number}
   */
  get sizeBytes(): number {
    return this._json.size_bytes;
  }

  /**
   * Get has local copy.
   * @returns {boolean}
   */
  get hasLocalCopy(): boolean {
    return this._json.has_local_copy;
  }

  /**
   * Get has remote copy.
   * @returns {boolean}
   */
  get hasRemoteCopy(): boolean {
    return this._json.has_remote_copy;
  }

  /**
   * Get has archival copy.
   * @returns {boolean}
   */
  get hasArchivalCopy(): boolean {
    return this._json.has_archival_copy;
  }

  /**
   * Get snapshot.
   * @returns {SnapshotAttempt}
   */
  get snapshot(): SnapshotAttempt {
    return new SnapshotAttempt(this._json.snapshot);
  }

  /**
   * Get the json representation of this class.
   * @returns {FileSnapshotInfoJson}
   */
  get json(): FileSnapshotInfoJson {
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
