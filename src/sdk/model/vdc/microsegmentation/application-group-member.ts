import { ApplicationGroupMemberJson } from './__json__/application-group-member-json';

/**
 * Application Group Member
 */
/* istanbul ignore next: autogenerated */
export class ApplicationGroupMember {

  constructor(private _json: ApplicationGroupMemberJson) {
  }

  /**
   * Get object id.
   * @returns {string}
   */
  get objectId(): string {
    return this._json.object_id;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get inheritance allowed.
   * @returns {boolean}
   */
  get inheritanceAllowed(): boolean {
    return this._json.inheritance_allowed;
  }

  /**
   * Get the json representation of this class.
   * @returns {ApplicationGroupMemberJson}
   */
  get json(): ApplicationGroupMemberJson {
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
