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
  * Return all IDs for the groups, administrative units, and directory roles that an object of one of the following types is a member of:
- user
- group
- service principal
- organizational contact
- device
- directory object This function is transitive. Only users and role-enabled groups can be members of directory roles.
  */
export function create(
  body: IEndpoints['POST /directoryRoleTemplates/{directoryRoleTemplate-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /directoryRoleTemplates/{directoryRoleTemplate-id}/getMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /directoryRoleTemplates/{directoryRoleTemplate-id}/getMemberObjects']['response']
> {
  return {
    method: 'post',
    path: '/directoryRoleTemplates/{directoryRoleTemplate-id}/getMemberObjects',
    paramDefs: [{ name: 'directoryRoleTemplate-id', in: 'path' }],
    params,
    body,
  };
}
