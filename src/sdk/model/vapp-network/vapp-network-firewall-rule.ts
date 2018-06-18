import { VappNetworkFirewallRuleJson } from './__json__/vapp-network-firewall-rule-json';

/* istanbul ignore next: autogenerated */
export class VappNetworkFirewallRule {

  constructor(private _json: VappNetworkFirewallRuleJson) {
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get destination ip.
   * @returns {string}
   */
  get destinationIp(): string {
    return this._json.destination_ip;
  }

  /**
   * Get destination port range.
   * @returns {string}
   */
  get destinationPortRange(): string {
    return this._json.destination_port_range;
  }

  /**
   * Get direction.
   * @returns {string}
   */
  get direction(): string {
    return this._json.direction;
  }

  /**
   * Get icmp sub type.
   * @returns {string}
   */
  get icmpSubType(): string {
    return this._json.icmp_sub_type;
  }

  /**
   * Get id.
   * @returns {string}
   */
  get id(): string {
    return this._json.id;
  }

  /**
   * Get policy.
   * @returns {string}
   */
  get policy(): string {
    return this._json.policy;
  }

  /**
   * Get port.
   * @returns {number}
   */
  get port(): number {
    return this._json.port;
  }

  /**
   * Get protocols.
   * @returns {Array<string>}
   */
  get protocols(): Array<string> {
    return this._json.protocols;
  }

  /**
   * Get source ip.
   * @returns {string}
   */
  get sourceIp(): string {
    return this._json.source_ip;
  }

  /**
   * Get source port.
   * @returns {number}
   */
  get sourcePort(): number {
    return this._json.source_port;
  }

  /**
   * Get source port range.
   * @returns {string}
   */
  get sourcePortRange(): string {
    return this._json.source_port_range;
  }

  /**
   * Get logging enabled.
   * @returns {boolean}
   */
  get loggingEnabled(): boolean {
    return this._json.logging_enabled;
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get match on translate.
   * @returns {boolean}
   */
  get matchOnTranslate(): boolean {
    return this._json.match_on_translate;
  }

  /**
   * Get rule index.
   * @returns {number}
   */
  get ruleIndex(): number {
    return this._json.rule_index;
  }

  /**
   * Get the json representation of this class.
   * @returns {VappNetworkFirewallRuleJson}
   */
  get json(): VappNetworkFirewallRuleJson {
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