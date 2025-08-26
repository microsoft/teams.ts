import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /directoryRoleTemplates/{directoryRoleTemplate-id}/getMemberObjects': Operation<
    '/directoryRoleTemplates/{directoryRoleTemplate-id}/getMemberObjects',
    'post'
  >;
}

/**
 * `POST /directoryRoleTemplates/{directoryRoleTemplate-id}/getMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /directoryRoleTemplates/{directoryRoleTemplate-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /directoryRoleTemplates/{directoryRoleTemplate-id}/getMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /directoryRoleTemplates/{directoryRoleTemplate-id}/getMemberObjects']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directoryRoleTemplates/{directoryRoleTemplate-id}/getMemberObjects',
    paramDefs: [{ name: 'directoryRoleTemplate-id', in: 'path' }],
    params,
    body,
  };
}
