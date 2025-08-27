import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/getMemberObjects': Operation<'/users/{user-id}/getMemberObjects', 'post'>;
}

/**
  * `POST /users/{user-id}/getMemberObjects`
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
  body: IEndpoints['POST /users/{user-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /users/{user-id}/getMemberObjects']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/getMemberObjects']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/getMemberObjects',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
