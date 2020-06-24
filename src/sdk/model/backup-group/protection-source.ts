import { VCloudProtectionSourceType } from './__json__/vcloud-protection-source-type';
import { ProtectionSourceJson } from './__json__/protection-source-json';

/**
 * Backup Group Disk Unit.
 */
export class ProtectionSource {

  constructor(private _json: ProtectionSourceJson) {
  }

  /**
   * Gets the iland entity UUID. May be null if the source has been deleted.
   * @returns {string | null} iland entity uuid
   */
  get entityUuid(): string | null {
    return this._json.entity_uuid || null;
  }

  /**
   * Gets the type of the associated iland IaaS entity.
   * @returns {VCloudProtectionSourceType} entity type
   */
  get entityType(): VCloudProtectionSourceType {
    return this._json.entity_type;
  }

  /**
   * Gets the name of the associated entity.
   * @returns {string} entity name
   */
  get entityName(): string {
    return this._json.entity_name;
  }

  /**
   * Gets native UID of the source in the backing service.
   * @returns {string} native uid
   */
  get nativeUid(): string {
    return this._json.native_uid;
  }

  /**
   * Gets the json representation of this class.
   * @returns {ProtectionSourceJson}
   */
  get json(): ProtectionSourceJson {
    return Object.assign({}, this._json);
  }

  /**
   * Gets the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
