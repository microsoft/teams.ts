import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/getMemberObjects': Operation<
    '/groups/{group-id}/getMemberObjects',
    'post'
  >;
}

/**
  * `POST /groups/{group-id}/getMemberObjects`
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
  body: IEndpoints['POST /groups/{group-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /groups/{group-id}/getMemberObjects']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/getMemberObjects']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/getMemberObjects',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
