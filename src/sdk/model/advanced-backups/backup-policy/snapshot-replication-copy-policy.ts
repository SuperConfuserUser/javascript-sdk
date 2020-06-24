/**
 * Snapshot Replication Copy Policy JSON.
 */
import { ReplicationPeriodicity } from './__json__/replication-periodicity';
import { SnapshotReplicationCopyPolicyJson } from './__json__/snapshot-replication-copy-policy-json';
import { ReplicationTargetSettings } from './replication-target-settings';

/**
 * Snapshot Replication Copy Policy.
 */
export class SnapshotReplicationCopyPolicy {

  constructor(private _json: SnapshotReplicationCopyPolicyJson) {
  }

  /**
   * Get whether snapshots were not captured for all objects in the group (true) or
   * all objects were successfully captured (false).
   * @returns {boolean}
   */
  get isCopyPartial(): boolean {
    return this._json.copy_partial;
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
   * Get target.
   * @returns {ReplicationTargetSettings}
   */
  get target(): ReplicationTargetSettings {
    return this._json.target;
  }

  /**
   * Get the json representation of this class.
   * @returns {SnapshotReplicationCopyPolicyJson}
   */
  get json(): SnapshotReplicationCopyPolicyJson {
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
