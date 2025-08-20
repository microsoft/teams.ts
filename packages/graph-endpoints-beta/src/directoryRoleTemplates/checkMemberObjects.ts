import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /directoryRoleTemplates/{directoryRoleTemplate-id}/checkMemberObjects': Operation<
    '/directoryRoleTemplates/{directoryRoleTemplate-id}/checkMemberObjects',
    'post'
  >;
}

/**
 * `POST /directoryRoleTemplates/{directoryRoleTemplate-id}/checkMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /directoryRoleTemplates/{directoryRoleTemplate-id}/checkMemberObjects']['body'],
  params?: IEndpoints['POST /directoryRoleTemplates/{directoryRoleTemplate-id}/checkMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /directoryRoleTemplates/{directoryRoleTemplate-id}/checkMemberObjects']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directoryRoleTemplates/{directoryRoleTemplate-id}/checkMemberObjects',
    paramDefs: [{ name: 'directoryRoleTemplate-id', in: 'path' }],
    params,
    body,
  };
}
