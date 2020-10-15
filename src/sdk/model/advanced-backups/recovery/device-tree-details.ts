import { CombineMethod } from './__json__/combine-method-enum';
import { DeviceNode } from './device-node';
import { DeviceTreeDetailsJson } from './__json__/device-tree-details-json';

/**
 * Device tree details.
 */
export class DeviceTreeDetails {

  constructor(private _json: DeviceTreeDetailsJson) {
  }

  /**
   * Get device length.
   * @returns {number}
   */
  get deviceLength(): number {
    return this._json.device_length;
  }

  /**
   * Get combine method.
   * @returns {CombineMethod}
   */
  get combineMethod(): CombineMethod {
    return this._json.combine_method;
  }

  /**
   * Get device nodes.
   * @returns {Array<DeviceNode>}
   */
  get deviceNodes(): Array<DeviceNode> {
    return this._json.device_nodes.map(it => new DeviceNode(it));
  }

  /**
   * Get stripe size.
   * @returns {number}
   */
  get stripeSize(): number {
    return this._json.stripe_size;
  }

  /**
   * Get the json representation of this class.
   * @returns {DeviceTreeDetailsJson}
   */
  get json(): DeviceTreeDetailsJson {
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
