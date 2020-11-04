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
   * The ID of the location that the result is associated with.
   * @returns {string}
   */
  get locationId(): string {
    return this._json.location_id;
  }

  /**
   * Get company id.
   * The ID of the company that the result is associated with.
   * @returns {string}
   */
  get companyId(): string {
    return this._json.company_id;
  }

  /**
   * Get org uuid.
   * The UUID of the Org that the result is associated with.
   * @returns {string}
   */
  get orgUuid(): string {
    return this._json.org_uuid;
  }

  /**
   * Get vdc uuid.
   * The UUID of the vDC that the result is associated with.
   * @returns {string}
   */
  get vdcUuid(): string {
    return this._json.vdc_uuid;
  }

  /**
   * Get vapp uuid.
   * The UUID of the vApp that the result is associated with.
   * @returns {string}
   */
  get vappUuid(): string {
    return this._json.vapp_uuid;
  }

  /**
   * Get vm uuid.
   * The UUID of the VM that the result is associated with.
   * @returns {string}
   */
  get vmUuid(): string {
    return this._json.vm_uuid;
  }

  /**
   * Get filename.
   * Specifies the name of the found file or folder.
   * @returns {string}
   */
  get filename(): string {
    return this._json.filename;
  }

  /**
   * Get is folder.
   * Specifies if the found item is a folder. If true, the found item is a folder.
   * @returns {boolean}
   */
  get isFolder(): boolean {
    return this._json.is_folder;
  }

  /**
   * Get backup group uid.
   * Specifies the UID of the backup group that is currently associated with the
   * object that contains the backed up file or folder.
   * @returns {string}
   */
  get backupGroupUid(): string {
    return this._json.backup_group_uid;
  }

  /**
   * Get type.
   * Specifies the type of the file document such as DIRECTORY, FILE, etc.
   * @returns {FileSearchResultType}
   */
  get type(): FileSearchResultType {
    return this._json.type;
  }

  /**
   * Get vm name.
   * The name of the associated VM.
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
