import { EdgeGatewayL2vpnStatisticsJson } from './__json__/edge-gateway-l2vpn-statistics-json';
import { EdgeGatewayL2vpnStatisticsData } from './edge-gateway-l2vpn-statistics-data';

/**
 * L2VPN Statistics Object returned by API
 */
/* istanbul ignore next: autogenerated */
export class EdgeGatewayL2vpnStatistics {

  constructor(private _json: EdgeGatewayL2vpnStatisticsJson) {
  }

  /**
   * Get time stamp.
   * @returns {number}
   */
  get timestamp(): number {
    return this._json.timestamp;
  }

  /**
   * Get l2vpn statistics data.
   * @returns {Array<EdgeGatewayL2vpnStatisticsData>}
   */
  get data(): Array<EdgeGatewayL2vpnStatisticsData> {
    return (this._json.l2vpn_stats || []).map(it => new EdgeGatewayL2vpnStatisticsData(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeGatewayL2vpnStatisticsJson}
   */
  get json(): EdgeGatewayL2vpnStatisticsJson {
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
