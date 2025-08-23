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
  * Return all IDs for the groups, administrative units, and directory roles that an object of one of the following types is a member of:
- user
- group
- service principal
- organizational contact
- device
- directory object This function is transitive. Only users and role-enabled groups can be members of directory roles.
  */
export function create(
  body: IEndpoints['POST /directoryRoles/{directoryRole-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /directoryRoles/{directoryRole-id}/getMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /directoryRoles/{directoryRole-id}/getMemberObjects']['response']
> {
  return {
    method: 'post',
    path: '/directoryRoles/{directoryRole-id}/getMemberObjects',
    paramDefs: [{ name: 'directoryRole-id', in: 'path' }],
    params,
    body,
  };
}
