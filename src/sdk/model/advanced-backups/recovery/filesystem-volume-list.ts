import { FilesystemVolume } from './filesystem-volume';
import { FilesystemVolumeListJson } from './__json__/filesystem-volume-list-json';

/**
 * Filesystem volume list.
 */
export class FilesystemVolumeList {

  constructor(private _json: FilesystemVolumeListJson) {
  }

  /**
   * Get data.
   * @returns {Array<FilesystemVolume>}
   */
  get data(): Array<FilesystemVolume> {
    return this._json.data.map(it => new FilesystemVolume(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {FilesystemVolumeListJson}
   */
  get json(): FilesystemVolumeListJson {
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
