import { RedistributionUpdateRequestJson } from './__json__/redistribution-update-request-json';
import { Rule } from './rule';
import { RuleJson } from './__json__/rule-json';

/**
 * Redistribution Update Request
 */
/* istanbul ignore next: autogenerated */
export class RedistributionUpdateRequest {

  private readonly _json: RedistributionUpdateRequestJson;

  constructor(redistributionUpdateRequest: RedistributionUpdateRequest);
  constructor(redistributionUpdateRequestJson: RedistributionUpdateRequestJson);
  constructor(enabled: boolean, rules: Array<RuleJson>);
  constructor(firstParam: boolean | RedistributionUpdateRequest | RedistributionUpdateRequestJson,
              rules?: Array<RuleJson>) {
    if (typeof firstParam === 'boolean') {
      // Parameters constructor
      this._json = {
        enabled: firstParam,
        rules: rules
      } as RedistributionUpdateRequestJson;
    } else if (firstParam instanceof RedistributionUpdateRequest) {
      // Copy constructor
      this._json = (firstParam as RedistributionUpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as RedistributionUpdateRequestJson;
    }
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get rules.
   * @returns {Array<Rule>}
   */
  get rules(): Array<Rule> {
    return this._json.rules.map(it => new Rule(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {RedistributionUpdateRequestJson}
   */
  get json(): RedistributionUpdateRequestJson {
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
