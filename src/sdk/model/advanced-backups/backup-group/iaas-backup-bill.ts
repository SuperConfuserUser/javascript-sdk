import { CurrencyCode } from '../../common/billing/__json__/currency-code-type';
import { IaasBackupBillJson } from './__json__/iaas-backup-bill-json';

/**
 * IaaS backup bill.
 */
export class IaasBackupBill {

  constructor(private _json: IaasBackupBillJson) {
  }

  /**
   * Get company id.
   * @returns {string}
   */
  get companyId(): string {
    return this._json.company_id;
  }

  /**
   * Get location id.
   * @returns {string}
   */
  get locationId(): string {
    return this._json.location_id;
  }

  /**
   * Get org uuid.
   * @returns {string}
   */
  get orgUuid(): string {
    return this._json.org_uuid;
  }

  /**
   * Get vdc uuid.
   * @returns {string}
   */
  get vdcUuid(): string {
    return this._json.vdc_uuid;
  }

  /**
   * Get year.
   * @returns {number}
   */
  get year(): number {
    return this._json.year;
  }

  /**
   * Get month.
   * The billing month, in range 1-12.
   * @returns {number}
   */
  get month(): number {
    return this._json.month;
  }

  /**
   * Get burst usage byte hours.
   * The number of byte-hours that have been consumed as burst.
   * @returns {number}
   */
  get burstUsageByteHours(): number {
    return this._json.burst_usage_byte_hours;
  }

  /**
   * Get burst cost.
   * The total cost of burst usage.
   * @returns {number}
   */
  get burstCost(): number {
    return this._json.burst_cost;
  }

  /**
   * Get reserved cost.
   * @returns {number}
   */
  get reservedCost(): number {
    return this._json.reserved_cost;
  }

  /**
   * Get currency code.
   * @returns {CurrencyCode}
   */
  get currencyCode(): CurrencyCode {
    return this._json.currency_code;
  }

  /**
   * Get the json representation of this class.
   * @returns {IaasBackupBillJson}
   */
  get json(): IaasBackupBillJson {
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
