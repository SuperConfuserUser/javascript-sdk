import { DirectoryListingJson } from './__json__/directory-listing-json';
import { DirectoryListingEntry } from './directory-listing-entry';

/**
 * Directory listing.
 */
export class DirectoryListing {

  constructor(private _json: DirectoryListingJson) {
  }

  /**
   * Get data.
   * @returns {DirectoryListingEntry}
   */
  get data(): DirectoryListingEntry {
    return new DirectoryListingEntry(this._json.data);
  }

  /**
   * Get pagination cookie.
   * @returns {string}
   */
  get paginationCookie(): string {
    return this._json.pagination_cookie;
  }

  /**
   * Get the json representation of this class.
   * @returns {DirectoryListingJson}
   */
  get json(): DirectoryListingJson {
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
