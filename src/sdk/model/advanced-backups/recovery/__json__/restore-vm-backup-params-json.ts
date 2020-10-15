/**
 * Restore VM Backup Params JSON.
 */
export interface RestoreVmBackupParamsJson {
  backup_run_uid: string;
  task_name: string;
  storage_profile?: string;
  vapp_uuid?: string;
  powered_on: boolean;
  prefix: string;
  suffix: string;
  continue_on_error: boolean;
}
