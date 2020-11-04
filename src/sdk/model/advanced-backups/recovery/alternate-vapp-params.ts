import { AlternateVappParamsJson } from './__json__/alternate-vapp-params-json';

/**
 * Alternate vApp params.
 */
export class AlternateVappParams {

  constructor(private _json: AlternateVappParamsJson) {
  }

  /**
   * Get vApp uuid.
   * The UUID of the vApp that the recovered VMs should be recovered in.
   * @returns {string}
   */
  get vappUuid(): string {
    return this._json.vapp_uuid;
  }

  /**
   * Get storage profile.
   * The UUID of the storage profile that the recovered objects should be imported to.
   * @returns {string}
   */
  get storageProfile(): string {
    return this._json.storage_profile;
  }

  /**
   * Get the json representation of this class.
   * @returns {AlternateVappParamsJson}
   */
  get json(): AlternateVappParamsJson {
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
