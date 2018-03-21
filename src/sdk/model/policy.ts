import { EntityDomainType, PermissionType, PolicyJson, PolicyType } from './json';
import { PermissionService } from '../service/permission-service';
import { Permission } from './permission';

/**
 * Policy.
 */
export class Policy {

  constructor(private _json: PolicyJson) {
  }

  /**
   * Gets the entity UUID associated with the policy.
   * @returns {string} the entity UUID
   */
  get entityUuid(): string {
    return this._json.entity_uuid;
  }

  /**
   * Gets the entity domain of the policy.
   * @returns {EntityDomainType} the entity domain
   */
  get entityDomain(): EntityDomainType {
    return this._json.domain;
  }

  /**
   * Gets the policy type.
   * @returns {PolicyType} the policy type
   */
  get type(): PolicyType {
    return this._json.type;
  }

  /**
   * Gets the permissions assigned to the policy.
   * @returns {Array<PermissionType>} the policy permissions
   */
  get permissions(): Array<PermissionType> {
    return this._json.permissions.slice();
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {PolicyJson} the JSON representation
   */
  get json(): PolicyJson {
    return Object.assign({}, this._json);
  }

  /**
   * Indicate whether the policy has the specified permission.
   * @param {PermissionType} permissionType
   * @returns {boolean}
   */
  hasPermission(permissionType: PermissionType): boolean {
    return this.permissions.indexOf(permissionType) > -1;
  }

}

/**
 * Policy Builder.
 */
export class PolicyBuilder {

  private _permissions: Array<PermissionType> = [];

  /**
   * Creates a new PolicyBuilder.
   * @param {string} _entityUuid the UUID of the entity that the policy will apply to
   * @param {EntityDomainType} _entityDomain the EntityDomain of the entity that the policy will apply to
   * @param {PolicyType} _type the policy type
   */
  constructor(private _entityUuid: string, private _entityDomain: EntityDomainType, private _type: PolicyType) {
  }

  /**
   * Set an array of permissions.
   * @param {Array<PermissionType>} array
   * @throws Error
   */
  setPermissions(array: Array<PermissionType>): PolicyBuilder {
    this._permissions = [];
    if (array.length > 0) {
      for (const permission of array) {
        try {
          this.addPermission(permission);
        } catch (err) {
          throw err;
        }
      }
    }
    return this;
  }

  /**
   * Adds a permission.
   * @param {PermissionType} permission the permission to add
   * @returns {PolicyBuilder} the builder
   * @throws Error
   */
  addPermission(permission: PermissionType): PolicyBuilder {
    const perm: Permission | undefined = PermissionService.getPermission(permission);
    if (perm) {
      const domain = perm.domain;
      if (domain !== this._entityDomain) {
        throw new Error('Attempted to add permission=' + permission + ' in domain=' + domain +
          ' to policy in domain=' + this._entityDomain + '.');
      }
      if (this._type !== 'CUSTOM') {
        throw new Error('Attempted to add permission to policy of type=' + this._type +
          '. Permissions may only be explicitly added to policies with type=CUSTOM');
      }
      if (perm && !perm.availableToCustomPolicy) {
        throw new Error('Permission=' + permission + ' cannot be assigned to a custom policy.');
      }
      if (!this._permissions.some((it) => it === permission)) {
        this._permissions.push(permission);
      }
    } else {
      throw new Error('Permission=' + permission + ' doesn\'t exist.');
    }
    return this;
  }

  /**
   * Removes a permission.
   * @param {PermissionType} permission the permission to remove
   * @returns {PolicyBuilder} the builder
   */
  removePermission(permission: PermissionType): PolicyBuilder {
    const idx = this._permissions.findIndex((it) => it === permission);
    if (idx >= 0) {
      this._permissions.splice(idx, 1);
    }
    return this;
  }

  /**
   * Builds the policy.
   * @returns {Policy} the new policy
   */
  build(): Policy {
    return new Policy({
      entity_uuid: this._entityUuid,
      domain: this._entityDomain,
      type: this._type,
      permissions: this._permissions
    });
  }

}