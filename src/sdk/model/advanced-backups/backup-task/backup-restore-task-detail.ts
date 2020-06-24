import { BackupRestoreTask } from './backup-restore-task';
import { Task } from '../../task/task';
import { BackupRestoreTaskDetailJson } from './__JSON__/backup-restore-task-detail-json';

/**
 * Backup restore task detail.
 */
export class BackupRestoreTaskDetail extends BackupRestoreTask {

  constructor(private _json: BackupRestoreTaskDetailJson) {
    super(_json);
  }

  /**
   * Get task detail.
   * @returns {Task | null}
   */
  get taskDetail(): Task | null {
    return this._json.task_detail ? new Task(this._json.task_detail) : null;
  }

  /**
   * Get the json representation of this class.
   * @returns {BackupRestoreTaskDetailJson}
   */
  get json(): BackupRestoreTaskDetailJson {
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
