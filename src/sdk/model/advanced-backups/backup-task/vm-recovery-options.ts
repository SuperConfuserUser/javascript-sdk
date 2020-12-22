import { VmRecoveryOptionsJson } from './__JSON__/vm-recovery-options-json';

export class VmRecoveryOptions {

  constructor(private _json: VmRecoveryOptionsJson) {
  }

  /**
   * Get whether the recovered VM is to be powered on.
   */
  get poweredOn(): boolean {
    return this._json.powered_on;
  }

  /**
   * Get the suffix that will be appended to the name of the recovered VM.
   */
  get suffix(): string | null {
    return this._json.suffix || null;
  }

  /**
   * Get the prefix that will be appended to the name of the recovered VM.
   */
  get prefix(): string | null {
    return this._json.prefix || null;
  }

  /**
   * Get the json representation of this class.
   * @returns {VmRecoveryOptionsJson}
   */
  get json(): VmRecoveryOptionsJson {
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
