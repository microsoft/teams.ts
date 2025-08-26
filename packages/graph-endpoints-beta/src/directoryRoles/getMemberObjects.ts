import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /directoryRoles/{directoryRole-id}/getMemberObjects': Operation<
    '/directoryRoles/{directoryRole-id}/getMemberObjects',
    'post'
  >;
}

/**
 * `POST /directoryRoles/{directoryRole-id}/getMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /directoryRoles/{directoryRole-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /directoryRoles/{directoryRole-id}/getMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /directoryRoles/{directoryRole-id}/getMemberObjects']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directoryRoles/{directoryRole-id}/getMemberObjects',
    paramDefs: [{ name: 'directoryRole-id', in: 'path' }],
    params,
    body,
  };
}
