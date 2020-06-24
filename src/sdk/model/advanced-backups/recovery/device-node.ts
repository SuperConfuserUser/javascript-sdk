import { DeviceTreeDetails } from './device-tree-details';
import { FilePartitionBlock } from './file-partition-block';
import { DeviceNodeJson } from './__json__/device-node-json';

/**
 * Device node.
 */
export class DeviceNode {

  constructor(private _json: DeviceNodeJson) {
  }

  /**
   * Get intermediate node.
   * @returns {DeviceTreeDetails}
   */
  get intermediateNode(): DeviceTreeDetails {
    return new DeviceTreeDetails(this._json.intermediate_node);
  }

  /**
   * Get leaf node.
   * @returns {FilePartitionBlock}
   */
  get leafNode(): FilePartitionBlock {
    return new FilePartitionBlock(this._json.leaf_node);
  }

  /**
   * Get the json representation of this class.
   * @returns {DeviceNodeJson}
   */
  get json(): DeviceNodeJson {
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
