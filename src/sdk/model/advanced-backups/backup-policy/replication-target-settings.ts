import { ReplicationTargetSettingsJson } from './__json__/replication-target-settings-json';

/**
 * Replication Target Settings.
 */
export class ReplicationTargetSettings {

  constructor(private _json: ReplicationTargetSettingsJson) {
  }

  /**
   * Get cluster ID.
   * @returns {number}
   */
  get clusterId(): number {
    return this._json.cluster_id;
  }

  /**
   * Get cluster name.
   * @returns {string}
   */
  get clusterName(): string {
    return this._json.cluster_name;
  }

  /**
   * Get the json representation of this class.
   * @returns {ReplicationTargetSettingsJson}
   */
  get json(): ReplicationTargetSettingsJson {
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
