import { ExtendedRetentionPolicyJson } from './__json__/extended-retention-policy-json';
import { RunType } from './__json__/run-type';
import { ReplicationPeriodicity } from './__json__/replication-periodicity';

/**
 * Extended Retention Policy.
 */
export class ExtendedRetentionPolicy {

  constructor(private _json: ExtendedRetentionPolicyJson) {
  }

  /**
   * Get backup run type.
   * @returns {RunType | null}
   */
  get backupRunType(): RunType | null {
    return this._json.backup_run_type || null;
  }

  /**
   * Get days to keep.
   * @returns {number}
   */
  get daysToKeep(): number {
    return this._json.days_to_keep;
  }

  /**
   * Get multiplier.
   * @returns {number}
   */
  get multiplier(): number {
    return this._json.multiplier;
  }

  /**
   * Get periodicity.
   * @returns {ReplicationPeriodicity}
   */
  get periodicity(): ReplicationPeriodicity {
    return this._json.periodicity;
  }

  /**
   * Get the json representation of this class.
   * @returns {ExtendedRetentionPolicyJson}
   */
  get json(): ExtendedRetentionPolicyJson {
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
