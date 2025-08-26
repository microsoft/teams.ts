import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /contracts/{contract-id}/getMemberObjects': Operation<
    '/contracts/{contract-id}/getMemberObjects',
    'post'
  >;
}

/**
  * `POST /contracts/{contract-id}/getMemberObjects`
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
  body: IEndpoints['POST /contracts/{contract-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /contracts/{contract-id}/getMemberObjects']['parameters']
): EndpointRequest<IEndpoints['POST /contracts/{contract-id}/getMemberObjects']['response']> {
  return {
    method: 'post',
    path: '/contracts/{contract-id}/getMemberObjects',
    paramDefs: [{ name: 'contract-id', in: 'path' }],
    params,
    body,
  };
}
