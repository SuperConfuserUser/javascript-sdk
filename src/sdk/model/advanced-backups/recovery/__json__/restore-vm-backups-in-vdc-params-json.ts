import { VmSnapshotRefJson } from './vm-snapshot-ref-json';

/**
 * Restore VM Backups in vDC params JSON.
 */
export interface RestoreVmBackupsInVdcParamsJson {
  snapshot_refs: Array<VmSnapshotRefJson>;
  task_name: string;
  storage_profile?: string;
  vapp_uuid?: string;
  powered_on: boolean;
  prefix: string;
  suffix: string;
  continue_on_error: boolean;
}
