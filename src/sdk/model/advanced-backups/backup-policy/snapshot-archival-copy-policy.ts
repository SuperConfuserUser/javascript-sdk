import { ReplicationPeriodicity } from './__json__/replication-periodicity';
import { SnapshotArchivalCopyPolicyJson } from './__json__/snapshot-archival-copy-policy-json';
import { ArchivalExternalTarget } from './archival-external-target';

/**
 * Snapshot Archival Copy Policy.
 */
export class SnapshotArchivalCopyPolicy {

  constructor(private _json: SnapshotArchivalCopyPolicyJson) {
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
   * Get archival external target.
   * @returns {ArchivalExternalTarget}
   */
  get target(): ArchivalExternalTarget {
    return new ArchivalExternalTarget(this._json.target);
  }

  /**
   * Get the json representation of this class.
   * @returns {SnapshotArchivalCopyPolicyJson}
   */
  get json(): SnapshotArchivalCopyPolicyJson {
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
