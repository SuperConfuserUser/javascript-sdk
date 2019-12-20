import { EdgeGatewayL2VpnJson } from './__json__/edge-gateway-l2vpn-json';
import { EdgeGatewayL2VpnLogging } from './edge-gateway-l2vpn-logging';
import { EdgeGatewayL2VpnSite } from './edge-gateway-l2vpn-site';
import { EdgeGatewayL2VpnSiteType } from './edge-gateway-l2vpn-site-type';

/* istanbul ignore next: autogenerated */
export class EdgeGatewayL2Vpn {

  constructor(private _json: EdgeGatewayL2VpnJson) {
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get logging.
   * @returns {EdgeGatewayL2VpnLogging}
   */
  get logging(): EdgeGatewayL2VpnLogging {
    return new EdgeGatewayL2VpnLogging(this._json.logging);
  }

  /**
   * Get l2 v p n site type.
   * @returns {EdgeGatewayL2VpnSiteType}
   */
  get l2VpnSiteType(): EdgeGatewayL2VpnSiteType {
    return this._json.l2_vpn_site_type;
  }

  /**
   * Get l2 vpn site.
   * @returns {EdgeGatewayL2VpnSite}
   */
  get l2VpnSite(): EdgeGatewayL2VpnSite {
    return new EdgeGatewayL2VpnSite(this._json.l2_vpn_site);
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeGatewayL2VpnJson}
   */
  get json(): EdgeGatewayL2VpnJson {
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
