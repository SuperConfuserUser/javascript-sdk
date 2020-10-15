import { FilesAndFoldersInfo } from './files-and-folders-info';
import { GenerateBackupFileDownloadBundleParamsJson }
  from './__json__/generate-backup-file-download-bundle-params-json';

/**
 * Generate backup file download bundle params.
 */
export class GenerateBackupFileDownloadBundleParams {

  constructor(private _json: GenerateBackupFileDownloadBundleParamsJson) {
  }

  /**
   * Get task name.
   * @returns {string}
   */
  get taskName(): string {
    return this._json.task_name;
  }

  /**
   * Get backup run uid.
   * @returns {string}
   */
  get backupRunUid(): string {
    return this._json.backup_run_uid;
  }

  /**
   * Get files and folders.
   * @returns {Array<FilesAndFoldersInfo>}
   */
  get filesAndFolders(): Array<FilesAndFoldersInfo> {
    return this._json.files_and_folders.map(it => new FilesAndFoldersInfo(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {GenerateBackupFileDownloadBundleParamsJson}
   */
  get json(): GenerateBackupFileDownloadBundleParamsJson {
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
