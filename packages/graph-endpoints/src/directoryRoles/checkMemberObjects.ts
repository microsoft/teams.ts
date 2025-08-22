import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /directoryRoles/{directoryRole-id}/checkMemberObjects': Operation<
    '/directoryRoles/{directoryRole-id}/checkMemberObjects',
    'post'
  >;
}

/**
 * `POST /directoryRoles/{directoryRole-id}/checkMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /directoryRoles/{directoryRole-id}/checkMemberObjects']['body'],
  params?: IEndpoints['POST /directoryRoles/{directoryRole-id}/checkMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /directoryRoles/{directoryRole-id}/checkMemberObjects']['response']
> {
  return {
    method: 'post',
    path: '/directoryRoles/{directoryRole-id}/checkMemberObjects',
    paramDefs: [{ name: 'directoryRole-id', in: 'path' }],
    params,
    body,
  };
}
