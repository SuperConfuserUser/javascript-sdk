import { PartitionTableFormat } from './__json__/partition-table-format-enum';
import { DiskFormat } from './__json__/disk-format-enum';
import { DiskBlock } from './disk-block';
import { DiskPartition } from './disk-partition';
import { DiskJson } from './__json__/disk-json';

/**
 * Disk.
 */
export class Disk {

  constructor(private _json: DiskJson) {
  }

  /**
   * Get vmdk size bytes.
   * @returns {number}
   */
  get vmdkSizeBytes(): number {
    return this._json.vmdk_size_bytes;
  }

  /**
   * Get vmdk file name.
   * @returns {string}
   */
  get vmdkFileName(): string {
    return this._json.vmdk_file_name;
  }

  /**
   * Get disk format.
   * @returns {DiskFormat}
   */
  get diskFormat(): DiskFormat {
    return this._json.disk_format;
  }

  /**
   * Get disk blocks.
   * @returns {Array<DiskBlock>}
   */
  get diskBlocks(): Array<DiskBlock> {
    return this._json.disk_blocks.map(it => new DiskBlock(it));
  }

  /**
   * Get sector size bytes.
   * @returns {number}
   */
  get sectorSizeBytes(): number {
    return this._json.sector_size_bytes;
  }

  /**
   * Get partition table format.
   * @returns {PartitionTableFormat}
   */
  get partitionTableFormat(): PartitionTableFormat {
    return this._json.partition_table_format;
  }

  /**
   * Get disk partitions.
   * @returns {Array<DiskPartition>}
   */
  get diskPartitions(): Array<DiskPartition> {
    return this._json.disk_partitions.map(it => new DiskPartition(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {DiskJson}
   */
  get json(): DiskJson {
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
