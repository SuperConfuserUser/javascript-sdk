import { BackupGroupStorageMetric } from './__json__/backup-group-storage-metric';
import { BackupGroupStorageSampleSeriesJson } from './__json__/backup-group-storage-sample-series-json';
import { Sample } from './sample';

/**
 * Backup group storage sample series.
 */
export class BackupGroupStorageSampleSeries {

  constructor(private _json: BackupGroupStorageSampleSeriesJson) {
  }

  /**
   * Get metric.
   * @returns {BackupGroupStorageMetric}
   */
  get metric(): BackupGroupStorageMetric {
    return this._json.metric;
  }

  /**
   * Get location id.
   * @returns {string}
   */
  get locationId(): string {
    return this._json.location_id;
  }

  /**
   * Get companyId.
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
   * Get vDC uuid.
   * @returns {string}
   */
  get vdcUuid(): string {
    return this._json.vdc_uuid;
  }

  /**
   * Get backup group uid.
   * @returns {string}
   */
  get backupGroupUid(): string {
    return this._json.backup_group_uid;
  }

  /**
   * Get samples.
   * @returns {Array<Sample>}
   */
  get samples(): Array<Sample> {
    return this._json.samples.map(it => new Sample(it));
  }

  /**
   * Get backup cluster uid.
   * @returns {string}
   */
  get backupClusterUid(): string {
    return this._json.backup_cluster_uid;
  }

  /**
   * Get the json representation of this class.
   * @returns {BackupGroupStorageSampleSeriesJson}
   */
  get json(): BackupGroupStorageSampleSeriesJson {
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
