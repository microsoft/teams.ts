import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /organization/{organization-id}/getMemberObjects': Operation<
    '/organization/{organization-id}/getMemberObjects',
    'post'
  >;
}

/**
  * `POST /organization/{organization-id}/getMemberObjects`
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
  body: IEndpoints['POST /organization/{organization-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /organization/{organization-id}/getMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /organization/{organization-id}/getMemberObjects']['response']
> {
  return {
    method: 'post',
    path: '/organization/{organization-id}/getMemberObjects',
    paramDefs: [{ name: 'organization-id', in: 'path' }],
    params,
    body,
  };
}
