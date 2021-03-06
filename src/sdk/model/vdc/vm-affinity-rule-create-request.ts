import { AffinityRuleType } from './__json__/affinity-rule-type';
import { VmAffinityRuleCreateRequestJson } from './__json__/vm-affinity-rule-create-request-json';

/* istanbul ignore next: autogenerated */
export class VmAffinityRuleCreateRequest {

  private readonly _json: VmAffinityRuleCreateRequestJson;

  constructor(vmAffinityRuleCreateRequest: VmAffinityRuleCreateRequest);
  constructor(vmAffinityRuleCreateRequestJson: VmAffinityRuleCreateRequestJson);
  constructor(name: string, isEnabled: boolean, type: AffinityRuleType, vmUuids: Array<string>, isMandatory: boolean);
  constructor(firstParam: string | VmAffinityRuleCreateRequest | VmAffinityRuleCreateRequestJson, isEnabled?: boolean,
              type?: AffinityRuleType, vmUuids?: Array<string>, isMandatory?: boolean) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        name: firstParam,
        is_enabled: isEnabled,
        type: type,
        vm_uuids: vmUuids,
        is_mandatory: isMandatory
      } as VmAffinityRuleCreateRequestJson;
    } else if (firstParam instanceof VmAffinityRuleCreateRequest) {
      // Copy constructor
      this._json = (firstParam as VmAffinityRuleCreateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as VmAffinityRuleCreateRequestJson;
    }
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get is enabled.
   * @returns {boolean}
   */
  get isEnabled(): boolean {
    return this._json.is_enabled;
  }

  /**
   * Get type.
   * @returns {AffinityRuleType}
   */
  get type(): AffinityRuleType {
    return this._json.type;
  }

  /**
   * Get vm uuids.
   * @returns {Array<string>}
   */
  get vmUuids(): Array<string> {
    return this._json.vm_uuids;
  }

  /**
   * Get is mandatory.
   * @returns {boolean}
   */
  get isMandatory(): boolean {
    return this._json.is_mandatory;
  }

  /**
   * Get the json representation of this class.
   * @returns {VmAffinityRuleCreateRequestJson}
   */
  get json(): VmAffinityRuleCreateRequestJson {
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
