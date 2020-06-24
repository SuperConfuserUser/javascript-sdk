import { BackupSummaryStats } from './backup-summary-stats';
import { VdcBackupSummaryStats } from './vdc-backup-summary-stats';
import { OrgBackupSummaryStatsJson } from './__json__/org-backup-summary-stats-json';

/**
 * Org Backup Summary Stats.
 */
export class OrgBackupSummaryStats {

  constructor(private _json: OrgBackupSummaryStatsJson) {
  }

  /**
   * Get org uuid.
   * @returns {string}
   */
  get orgUuid(): string {
    return this._json.org_uuid;
  }

  /**
   * Get stats.
   * @returns {BackupSummaryStats}
   */
  get stats(): BackupSummaryStats {
    return new BackupSummaryStats(this._json.stats);
  }

  /**
   * Get vDC stats.
   * @returns {Array<VdcBackupSummaryStats>}
   */
  get vdcStats(): Array<VdcBackupSummaryStats> {
    return this._json.vdc_stats?.map(it => new VdcBackupSummaryStats(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {OrgBackupSummaryStatsJson}
   */
  get json(): OrgBackupSummaryStatsJson {
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
