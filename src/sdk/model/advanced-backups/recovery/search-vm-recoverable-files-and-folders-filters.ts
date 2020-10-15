import { FileType } from './__json__/file-type-enum';
import { SearchVmRecoverableFilesAndFoldersFiltersJson } from './__json__/search-vm-recoverable-files-and-folders-filters-json';

/**
 * Search VM recoverable files and folders.
 */
export class SearchVmRecoverableFilesAndFoldersFilters {

  constructor(private _json: SearchVmRecoverableFilesAndFoldersFiltersJson) {
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
   * Get file type.
   * @returns {FileType}
   */
  get fileType(): FileType {
    return this._json.file_type;
  }

  /**
   * Get the json representation of this class.
   * @returns {SearchVmRecoverableFilesAndFoldersFiltersJson}
   */
  get json(): SearchVmRecoverableFilesAndFoldersFiltersJson {
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
