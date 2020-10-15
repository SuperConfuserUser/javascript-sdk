import { FileSnapshotInfo } from './file-snapshot-info';
import { FileSnapshotInfoListJson } from './__json__/file-snapshot-info-list-json';

/**
 * File snapshot info list.
 */
export class FileSnapshotInfoList {

  constructor(private _json: FileSnapshotInfoListJson) {
  }

  /**
   * Get data.
   * @returns {Array<FileSnapshotInfo>}
   */
  get data(): Array<FileSnapshotInfo> {
    return this._json.data.map(it => new FileSnapshotInfo(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {FileSnapshotInfoListJson}
   */
  get json(): FileSnapshotInfoListJson {
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
