import { DirectoryListingEntryJson } from './directory-listing-entry-json';

/**
 * Directory listing JSON.
 */
export interface DirectoryListingJson {
  data: DirectoryListingEntryJson;
  pagination_cookie: string;
}
