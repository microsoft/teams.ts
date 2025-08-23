import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /solutions/backupRestore/enable': Operation<'/solutions/backupRestore/enable', 'post'>;
}

/**
 * `POST /solutions/backupRestore/enable`
 *
 * Enable the Microsoft 365 Backup Storage service for a tenant.
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/enable']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/enable']['parameters']
): EndpointRequest<IEndpoints['POST /solutions/backupRestore/enable']['response']> {
  return {
    method: 'post',
    path: '/solutions/backupRestore/enable',
    paramDefs: [],
    params,
    body,
  };
}
