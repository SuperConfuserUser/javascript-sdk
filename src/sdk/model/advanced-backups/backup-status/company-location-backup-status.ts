import { OrgBackupStatus } from './org-backup-status';
import { CompanyLocationBackupStatusJson } from './__json__/company-location-backup-status-json';

/**
 * Company Location Backup Status.
 */
export class CompanyLocationBackupStatus {

  constructor(private _json: CompanyLocationBackupStatusJson) {
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
   * Get child org statuses.
   * @returns {Array<OrgBackupStatus>}
   */
  get childOrgStatuses(): Array<OrgBackupStatus> {
    return this._json.child_org_statuses.map(it => new OrgBackupStatus(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {CompanyLocationBackupStatusJson}
   */
  get json(): CompanyLocationBackupStatusJson {
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
