import { BackupGroupSummaryStatsJson } from './__json__/backup-group-summary-stats-json';

/**
 * Backup Group Summary Stats.
 */
export class BackupGroupSummaryStats {

  constructor(private _json: BackupGroupSummaryStatsJson) {
  }

  /**
   * Get backup group uid.
   * @returns {string}
   */
  get backupGroupUid(): string {
    return this._json.backup_group_uid;
  }

  /**
   * Get stats.
   * @returns {BackupGroupSummaryStats}
   */
  get stats(): BackupGroupSummaryStats {
    return new BackupGroupSummaryStats(this._json.stats);
  }

  /**
   * Get the json representation of this class.
   * @returns {BackupGroupSummaryStatsJson}
   */
  get json(): BackupGroupSummaryStatsJson {
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
