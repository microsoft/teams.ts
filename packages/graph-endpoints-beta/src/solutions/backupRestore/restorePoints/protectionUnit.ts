import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /solutions/backupRestore/restorePoints/{restorePoint-id}/protectionUnit': Operation<
    '/solutions/backupRestore/restorePoints/{restorePoint-id}/protectionUnit',
    'get'
  >;
}

/**
 * `GET /solutions/backupRestore/restorePoints/{restorePoint-id}/protectionUnit`
 *
 * The site, drive, or mailbox units that are protected under a protection policy.
 */
export function get(
  params?: IEndpoints['GET /solutions/backupRestore/restorePoints/{restorePoint-id}/protectionUnit']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/backupRestore/restorePoints/{restorePoint-id}/protectionUnit']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/backupRestore/restorePoints/{restorePoint-id}/protectionUnit',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'restorePoint-id', in: 'path' },
    ],
    params,
  };
}
