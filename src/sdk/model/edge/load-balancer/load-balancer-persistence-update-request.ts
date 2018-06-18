import { LoadBalancerPersistenceUpdateRequestJson } from './__json__/load-balancer-persistence-update-request-json';

/**
 * Load Balancer Persistence Update Request.
 */
/* istanbul ignore next: autogenerated */
export class LoadBalancerPersistenceUpdateRequest {

  private readonly _json: LoadBalancerPersistenceUpdateRequestJson;

  constructor(loadBalancerPersistenceUpdateRequest: LoadBalancerPersistenceUpdateRequest);
  constructor(loadBalancerPersistenceUpdateRequestJson: LoadBalancerPersistenceUpdateRequestJson);
  constructor(method: string, cookieName: string, cookieMode: string);
  constructor(firstParam: string | LoadBalancerPersistenceUpdateRequest | LoadBalancerPersistenceUpdateRequestJson,
              cookieName?: string, cookieMode?: string) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        method: firstParam,
        cookie_name: cookieName,
        cookie_mode: cookieMode
      } as LoadBalancerPersistenceUpdateRequestJson;
    } else if (firstParam instanceof LoadBalancerPersistenceUpdateRequest) {
      // Copy constructor
      this._json = (firstParam as LoadBalancerPersistenceUpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as LoadBalancerPersistenceUpdateRequestJson;
    }
  }

  /**
   * Get method.
   * @returns {string}
   */
  get method(): string {
    return this._json.method;
  }

  /**
   * Get cookie name.
   * @returns {string}
   */
  get cookieName(): string {
    return this._json.cookie_name;
  }

  /**
   * Get cookie mode.
   * @returns {string}
   */
  get cookieMode(): string {
    return this._json.cookie_mode;
  }

  /**
   * Get the json representation of this class.
   * @returns {LoadBalancerPersistenceUpdateRequestJson}
   */
  get json(): LoadBalancerPersistenceUpdateRequestJson {
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