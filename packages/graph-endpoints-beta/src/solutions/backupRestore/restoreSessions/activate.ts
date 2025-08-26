import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate': Operation<
    '/solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate',
    'post'
  >;
}

/**
 * `POST /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate`
 *
 * Activate a draft restoreSessionBase object to restore a protection unit. The following points apply to restoring a protection unit:
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/backupRestore/restoreSessions/{restoreSessionBase-id}/activate',
    paramDefs: [{ name: 'restoreSessionBase-id', in: 'path' }],
    params,
    body,
  };
}
