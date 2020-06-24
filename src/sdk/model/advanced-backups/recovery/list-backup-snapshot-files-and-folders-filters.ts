import { ListBackupSnapshotFilesAndFoldersFiltersJson } from './__json__/list-backup-snapshot-files-and-folders-filters-json';

/**
 * List backup snapshot files and folders filters.
 */
export class ListBackupSnapshotFilesAndFoldersFilters {

  constructor(private _json: ListBackupSnapshotFilesAndFoldersFiltersJson) {
  }

  /**
   * Get attempt number.
   * @returns {number | null}
   */
  get attemptNumber(): number | null {
    return this._json.attempt_number || null;
  }

  /**
   * Get pagination cookie.
   * @returns {string | null}
   */
  get paginationCookie(): string | null {
    return this._json.pagination_cookie || null;
  }

  /**
   * Get max entries.
   * @returns {number | null}
   */
  get maxEntries(): number | null {
    return this._json.max_entries || null;
  }

  /**
   * Get stat file entries.
   * @returns {boolean | null}
   */
  get statFileEntries(): boolean | null {
    return this._json.stat_file_entries || null;
  }

  /**
   * Get browser index data.
   * @returns {boolean | null}
   */
  get browserIndexData(): boolean | null {
    return this._json.browser_index_data || null;
  }

  /**
   * Get the json representation of this class.
   * @returns {ListBackupSnapshotFilesAndFoldersFiltersJson}
   */
  get json(): ListBackupSnapshotFilesAndFoldersFiltersJson {
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
