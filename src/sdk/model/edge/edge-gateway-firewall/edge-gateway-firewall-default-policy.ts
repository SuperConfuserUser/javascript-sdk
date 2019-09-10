import { EdgeGatewayFirewallActionType } from './__json__/edge-gateway-firewall-action-type';
import { EdgeGatewayFirewallDefaultPolicyJson } from './__json__/edge-gateway-firewall-default-policy-json';

/**
 * Firewall Default Policy
 */
/* istanbul ignore next: autogenerated */
export class EdgeGatewayFirewallDefaultPolicy {

  constructor(private _json: EdgeGatewayFirewallDefaultPolicyJson) {}

  /**
   * Get firewall action type.
   * @returns {EdgeGatewayFirewallActionType}
   */
  get firewallActionType(): EdgeGatewayFirewallActionType {
    return this._json.firewall_action_type;
  }

  /**
   * Get logging enabled.
   * @returns {boolean}
   */
  get loggingEnabled(): boolean {
    return this._json.logging_enabled;
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeGatewayFirewallDefaultPolicyJson}
   */
  get json(): EdgeGatewayFirewallDefaultPolicyJson {
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