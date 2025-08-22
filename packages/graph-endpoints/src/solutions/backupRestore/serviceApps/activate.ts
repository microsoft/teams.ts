import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /solutions/backupRestore/serviceApps/{serviceApp-id}/activate': Operation<
    '/solutions/backupRestore/serviceApps/{serviceApp-id}/activate',
    'post'
  >;
}

/**
 * `POST /solutions/backupRestore/serviceApps/{serviceApp-id}/activate`
 *
 * Activate a serviceApp.
 */
export function create(
  body: IEndpoints['POST /solutions/backupRestore/serviceApps/{serviceApp-id}/activate']['body'],
  params?: IEndpoints['POST /solutions/backupRestore/serviceApps/{serviceApp-id}/activate']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/backupRestore/serviceApps/{serviceApp-id}/activate']['response']
> {
  return {
    method: 'post',
    path: '/solutions/backupRestore/serviceApps/{serviceApp-id}/activate',
    paramDefs: [{ name: 'serviceApp-id', in: 'path' }],
    params,
    body,
  };
}
