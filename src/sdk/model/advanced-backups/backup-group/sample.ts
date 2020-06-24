import { SampleJson } from './__json__/sample-json';

/**
 * Sample.
 */
export class Sample {

  constructor(private _json: SampleJson) {
  }

  /**
   * Get components.
   * The component samples that contribute to the total value. A map of backup
   * cluster UID to value in bytes. Value may be null if the component has no
   * contribution.
   * @returns {Record<string, number | null>}
   */
  get components(): Record<string, number | null> {
    return this._json.components;
  }

  /**
   * Get timestamp.
   * @returns {number}
   */
  get timestamp(): number {
    return this._json.timestamp;
  }

  /**
   * Get value.
   * @returns {number | null}
   */
  get value(): number | null {
    return this._json.value || null;
  }

  /**
   * Get the json representation of this class.
   * @returns {SampleJson}
   */
  get json(): SampleJson {
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
