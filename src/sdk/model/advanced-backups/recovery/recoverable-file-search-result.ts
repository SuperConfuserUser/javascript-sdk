import { RecoverableFileSearchResultJson } from './__json__/recoverable-file-search-result-json';
import { FileSearchResultType } from './__json__/file-search-result-type-enum';

/**
 * Recoverable file search result.
 */
export class RecoverableFileSearchResult {

  constructor(private _json: RecoverableFileSearchResultJson) {
  }

  /**
   * Get location id.
   * @returns {string}
   */
  get locationId(): string {
    return this._json.location_id;
  }

  /**
   * Get company id.
   * @returns {string}
   */
  get companyId(): string {
    return this._json.company_id;
  }

  /**
   * Get org uuid.
   * @returns {string}
   */
  get orgUuid(): string {
    return this._json.org_uuid;
  }

  /**
   * Get vdc uuid.
   * @returns {string}
   */
  get vdcUuid(): string {
    return this._json.vdc_uuid;
  }

  /**
   * Get vapp uuid.
   * @returns {string}
   */
  get vappUuid(): string {
    return this._json.vapp_uuid;
  }

  /**
   * Get vm uuid.
   * @returns {string}
   */
  get vmUuid(): string {
    return this._json.vm_uuid;
  }

  /**
   * Get filename.
   * @returns {string}
   */
  get filename(): string {
    return this._json.filename;
  }

  /**
   * Get is folder.
   * @returns {boolean}
   */
  get isFolder(): boolean {
    return this._json.is_folder;
  }

  /**
   * Get backup group uid.
   * @returns {string}
   */
  get backupGroupUid(): string {
    return this._json.backup_group_uid;
  }

  /**
   * Get type.
   * @returns {FileSearchResultType}
   */
  get type(): FileSearchResultType {
    return this._json.type;
  }

  /**
   * Get vm name.
   * @returns {string}
   */
  get vmName(): string {
    return this._json.vm_name;
  }

  /**
   * Get the json representation of this class.
   * @returns {RecoverableFileSearchResultJson}
   */
  get json(): RecoverableFileSearchResultJson {
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
