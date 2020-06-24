import { RecoverableFileSearchResult } from './recoverable-file-search-result';
import { RecoverableFilesSearchResultListJson } from './__json__/recoverable-files-search-result-list-json';

/**
 * Recoverable files search results list.
 */
export class RecoverableFilesSearchResultList {

  constructor(private _json: RecoverableFilesSearchResultListJson) {
  }

  /**
   * Get data.
   * @returns {Array<RecoverableFileSearchResult>}
   */
  get data(): Array<RecoverableFileSearchResult> {
    return this._json.data.map(it => new RecoverableFileSearchResult(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {RecoverableFilesSearchResultListJson}
   */
  get json(): RecoverableFilesSearchResultListJson {
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
