import { CatalogCreateRequestJson } from './__json__/catalog-create-request-json';

/**
 * Catalog Create Request.
 */
/* istanbul ignore next: autogenerated */
export class CatalogCreateRequest {

  private readonly _json: CatalogCreateRequestJson;

  constructor(catalogCreateRequest: CatalogCreateRequest);
  constructor(catalogCreateRequestJson: CatalogCreateRequestJson);
  constructor(name: string, description: string, storageProfileUuid: string);
  constructor(firstParam: string | CatalogCreateRequest | CatalogCreateRequestJson,
              description?: string, storageProfileUuid?: string) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        name: firstParam,
        description: description,
        storage_profile_uuid: storageProfileUuid
      } as CatalogCreateRequestJson;
    } else if (firstParam instanceof CatalogCreateRequest) {
      // Copy constructor
      this._json = (firstParam as CatalogCreateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as CatalogCreateRequestJson;
    }
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get storage profile uuid.
   * @returns {string}
   */
  get storageProfileUuid(): string {
    return this._json.storage_profile_uuid;
  }

  /**
   * Get the json representation of this class.
   * @returns {CatalogCreateRequestJson}
   */
  get json(): CatalogCreateRequestJson {
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
