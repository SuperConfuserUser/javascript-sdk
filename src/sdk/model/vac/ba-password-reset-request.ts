import { BaCompanyPasswordResetRequestJson } from './__json__/ba-password-reset-request';

/* istanbul ignore next: autogenerated */
export class BaCompanyPasswordResetRequest {

  private readonly _json: BaCompanyPasswordResetRequestJson;

  constructor(baCompanyPasswordResetRequest: BaCompanyPasswordResetRequest);
  constructor(baCompanyPasswordResetRequestJson: BaCompanyPasswordResetRequestJson);
  constructor(password: string);
  constructor(firstParam: string | BaCompanyPasswordResetRequest | BaCompanyPasswordResetRequestJson) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        password: firstParam
      } as BaCompanyPasswordResetRequestJson;
    } else if (firstParam instanceof BaCompanyPasswordResetRequest) {
      // Copy constructor
      this._json = (firstParam as BaCompanyPasswordResetRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as BaCompanyPasswordResetRequestJson;
    }
  }

  /**
   * Get password.
   * @returns {string}
   */
  get password(): string {
    return this._json.password;
  }

  /**
   * Get the json representation of this class.
   * @returns {BaCompanyPasswordResetRequestJson}
   */
  get json(): BaCompanyPasswordResetRequestJson {
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