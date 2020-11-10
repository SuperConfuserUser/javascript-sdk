import { VdcBackupStorageMetric } from './__json__/vdc-backup-storage-metric';
import { Sample } from './sample';
import { VdcBackupStorageSampleSeriesJson } from './__json__/vdc-backup-storage-sample-series-json';

/**
 * vDC backup storage sample series.
 */
export class VdcBackupStorageSampleSeries {

  constructor(private _json: VdcBackupStorageSampleSeriesJson) {
  }

  /**
   * Get metric.
   * @returns {VdcBackupStorageMetric}
   */
  get metric(): VdcBackupStorageMetric {
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
   * Get vDC uuid.
   * @returns {string}
   */
  get vdcUuid(): string {
    return this._json.vdc_uuid;
  }

  /**
   * Get samples.
   * @returns {Array<Sample>}
   */
  get samples(): Array<Sample> {
    return this._json.samples.map(it => new Sample(it));
  }

  /**
   * Get backup cluster id.
   * @returns {string}
   */
  get backupClusterId(): string {
    return this._json.backup_cluster_id;
  }

  /**
   * Get the json representation of this class.
   * @returns {VdcBackupStorageSampleSeriesJson}
   */
  get json(): VdcBackupStorageSampleSeriesJson {
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
