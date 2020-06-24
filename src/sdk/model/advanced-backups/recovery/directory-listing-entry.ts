import { DirEntryType } from './__json__/dir-entry-type-enum';
import { FStatInfo } from './f-stat-info';
import { DirectoryListingEntryJson } from './__json__/directory-listing-entry-json';

/**
 * Directory listing entry.
 */
export class DirectoryListingEntry {

  constructor(private _json: DirectoryListingEntryJson) {
  }

  /**
   * Get f stat info.
   * @returns {FStatInfo | null}
   */
  get fStatInfo(): FStatInfo | null {
    return this._json.f_stat_info ? new FStatInfo(this._json.f_stat_info) : null;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get type.
   * @returns {DirEntryType}
   */
  get type(): DirEntryType {
    return this._json.type;
  }

  /**
   * Get full path.
   * @returns {string}
   */
  get fullPath(): string {
    return this._json.full_path;
  }

  /**
   * Get the json representation of this class.
   * @returns {DirectoryListingEntryJson}
   */
  get json(): DirectoryListingEntryJson {
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
