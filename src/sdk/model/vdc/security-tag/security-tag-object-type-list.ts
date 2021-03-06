import { SecurityTagObjectTypeListJson } from './__json__/security-tag-object-type-list-json';
import { SecurityTagObjectType } from './security-tag-object-type';

/**
 * Security Tag Object Type List.
 */
/* istanbul ignore next: autogenerated */
export class SecurityTagObjectTypeList {

  constructor(private _json: SecurityTagObjectTypeListJson) {
  }

  /**
   * Get data.
   * @returns {Array<SecurityTagObjectType>}
   */
  get data(): Array<SecurityTagObjectType> {
    return this._json.data.map(it => new SecurityTagObjectType(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {SecurityTagObjectTypeListJson}
   */
  get json(): SecurityTagObjectTypeListJson {
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
