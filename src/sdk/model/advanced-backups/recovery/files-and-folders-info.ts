import { FilesAndFoldersInfoJson } from './__json__/files-and-folders-info-json';

/**
 * Files and folders info.
 */
export class FilesAndFoldersInfo {

  private readonly _json: FilesAndFoldersInfoJson;

  constructor(filesAndFoldersInfo: FilesAndFoldersInfo);
  constructor(filesAndFoldersInfoJson: FilesAndFoldersInfoJson);
  constructor(isDirectory: boolean, absolutePath: string);
  constructor(firstParam: boolean | FilesAndFoldersInfo | FilesAndFoldersInfoJson, absolutePath?: string) {
    // Parameters constructor
    if (typeof firstParam === 'boolean') {
      this._json = {
        is_directory: firstParam,
        absolute_path: absolutePath
      } as FilesAndFoldersInfoJson;
    } else if (firstParam instanceof FilesAndFoldersInfo) {
      // Copy constructor
      this._json = (firstParam as FilesAndFoldersInfo).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as FilesAndFoldersInfoJson;
    }
  }

  /**
   * Get is directory.
   * Specifies if specified object is a directory or not.
   * @returns {boolean}
   */
  get isDirectory(): boolean {
    return this._json.is_directory;
  }

  /**
   * Get absolute path.
   * Specifies the absolute path of the specified file or folder.
   * @returns {string}
   */
  get absolutePath(): string {
    return this._json.absolute_path;
  }

  /**
   * Get the json representation of this class.
   * @returns {FilesAndFoldersInfoJson}
   */
  get json(): FilesAndFoldersInfoJson {
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
