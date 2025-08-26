import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /solutions/backupRestore/serviceApps/{serviceApp-id}/deactivate': Operation<
    '/solutions/backupRestore/serviceApps/{serviceApp-id}/deactivate',
    'post'
  >;
}

/**
 * `POST /solutions/backupRestore/serviceApps/{serviceApp-id}/deactivate`
 *
 * Deactivate a serviceApp.
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/serviceApps/{serviceApp-id}/deactivate']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/serviceApps/{serviceApp-id}/deactivate']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/serviceApps/{serviceApp-id}/deactivate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/backupRestore/serviceApps/{serviceApp-id}/deactivate',
    paramDefs: [{ name: 'serviceApp-id', in: 'path' }],
    params,
    body,
  };
}
