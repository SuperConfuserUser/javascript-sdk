import { BackupSummaryStats } from './backup-summary-stats';
import { BackupGroupSummaryStats } from './backup-group-summary-stats';
import { VdcBackupSummaryStatsJson } from './__json__/vdc-backup-summary-stats-json';

/**
 * vDC Backup Summary Stats.
 */
export class VdcBackupSummaryStats {

  constructor(private _json: VdcBackupSummaryStatsJson) {
  }

  /**
   * Get vdc uuid.
   * @returns {string}
   */
  get vdcUuid(): string {
    return this._json.vdc_uuid;
  }

  /**
   * Get stats.
   * @returns {BackupSummaryStats}
   */
  get stats(): BackupSummaryStats {
    return new BackupSummaryStats(this._json.stats);
  }

  /**
   * Get backup group stats.
   * @returns {Array<BackupGroupSummaryStats>}
   */
  get backupGroupStats(): Array<BackupGroupSummaryStats> {
    return this._json.backup_group_stats?.map(it => new BackupGroupSummaryStats(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {VdcBackupSummaryStatsJson}
   */
  get json(): VdcBackupSummaryStatsJson {
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
