import { CurrencyCode } from '../../common/billing/__json__/currency-code-type';
import { IaasBackupSubscriptionJson } from './__json__/iaas-backup-subscription-json';

/**
 * Iaas backup subscription.
 */
export class IaasBackupSubscription {

  constructor(private _json: IaasBackupSubscriptionJson) {
  }

  /**
   * Get the json representation of this class.
   * @returns {IaasBackupSubscriptionJson}
   */
  get json(): IaasBackupSubscriptionJson {
    return Object.assign({}, this._json);
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
   * Get activation time.
   * @returns {number}
   */
  get activationTime(): number {
    return this._json.activation_time;
  }

  /**
   * Get deactivation time.
   * @returns {number | null}
   */
  get deactivationTime(): number | null {
    return this._json.deactivation_time || null;
  }

  /**
   * Get reserved amount gb.
   * @returns {number}
   */
  get reservedAmountGb(): number {
    return this._json.reserved_amount_gb;
  }

  /**
   * Get reserved cost.
   * @returns {number}
   */
  get reservedCost(): number {
    return this._json.reserved_cost;
  }

  /**
   * Get burst cost per GB-hour.
   * @returns {number}
   */
  get burstCostPerGbHour(): number {
    return this._json.burst_cost_per_gbhour;
  }

  /**
   * Get currency code.
   * @returns {CurrencyCode}
   */
  get currencyCode(): CurrencyCode {
    return this._json.currency_code;
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
