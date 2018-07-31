import { VappDownloadDetailsJson } from './__json__/vapp-download-detail-json';

/* istanbul ignore next: autogenerated */
export class VappDownloadDetails {

  constructor(private _json: VappDownloadDetailsJson) {
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get download name.
   * @returns {string}
   */
  get downloadName(): string {
    return this._json.download_name;
  }

  /**
   * Get download size bytes.
   * @returns {number}
   */
  get downloadSizeBytes(): number {
    return this._json.download_size_bytes;
  }

  /**
   * Get the json representation of this class.
   * @returns {DownloadDetailsJson}
   */
  get json(): VappDownloadDetailsJson {
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