import { NATRestorePointDetailsJson } from './__json__/nat-restore-point-detail-json';
import { EdgeGatewayNatJson } from '../edge-gateway-nat/__json__/edge-gateway-nat-json';
import { EdgeGatewayNat } from '../edge-gateway-nat/edge-gateway-nat';
import { Edge } from '../edge';

/**
 * NAT Restore Point Details.
 */
/* istanbul ignore next: autogenerated */
export class NATRestorePointDetails {

  constructor(private _json: NATRestorePointDetailsJson) {
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get restore point time.
   * @returns {number}
   */
  get restorePointTime(): Date {
    return new Date(this._json.restore_point_time);
  }

  /**
   * Get NAT configuration.
   * @returns {EdgeGatewayNat}
   */
  get data(): EdgeGatewayNat {
    return new EdgeGatewayNat(this._json.data);
  }

  /**
   * Get the json representation of this class.
   * @returns {NATRestorePointDetailsJson}
   */
  get json(): NATRestorePointDetailsJson {
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
