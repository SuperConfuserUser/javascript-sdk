import {
  SearchVdcRecoverableFilesAndFoldersFiltersJson
} from './__json__/search-vdc-recoverable-files-and-folders-filters-json';
import { FileType } from './__json__/file-type-enum';

/**
 * Search vDC recoverable files and folders.
 */
export class SearchVdcRecoverableFilesAndFoldersFilters {

  constructor(private _json: SearchVdcRecoverableFilesAndFoldersFiltersJson) {
  }

  /**
   * Get start time.
   * @returns {number | null}
   */
  get startTime(): number | null {
    return this._json.start_time || null;
  }

  /**
   * Get end time.
   * @returns {number | null}
   */
  get endTime(): number | null {
    return this._json.end_time || null;
  }

  /**
   * Get search.
   * @returns {string}
   */
  get search(): string {
    return this._json.search;
  }

  /**
   * Get backup group uids.
   * @returns {Array<string> | null}
   */
  get backupGroupUids(): Array<string> | null {
    return this._json.backup_group_uids || null;
  }

  /**
   * Get vm uuids.
   * @returns {Array<string> | null}
   */
  get vmUuids(): Array<string> | null {
    return this._json.vm_uuids || null;
  }

  /**
   * Get file type.
   * @returns {FileType}
   */
  get fileType(): FileType {
    return this._json.file_type;
  }

  /**
   * Get the json representation of this class.
   * @returns {SearchVdcRecoverableFilesAndFoldersFiltersJson}
   */
  get json(): SearchVdcRecoverableFilesAndFoldersFiltersJson {
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
