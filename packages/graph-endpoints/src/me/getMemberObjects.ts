import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /me/getMemberObjects': Operation<'/me/getMemberObjects', 'post'>;
}

/**
  * `POST /me/getMemberObjects`
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
  body: IEndpoints['POST /me/getMemberObjects']['body'],
  params?: IEndpoints['POST /me/getMemberObjects']['parameters']
): EndpointRequest<IEndpoints['POST /me/getMemberObjects']['response']> {
  return {
    method: 'post',
    path: '/me/getMemberObjects',
    paramDefs: [],
    params,
    body,
  };
}
