import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /devices/{device-id}/getMemberObjects': Operation<
    '/devices/{device-id}/getMemberObjects',
    'post'
  >;
}

/**
  * `POST /devices/{device-id}/getMemberObjects`
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
  body: IEndpoints['POST /devices/{device-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /devices/{device-id}/getMemberObjects']['parameters']
): EndpointRequest<IEndpoints['POST /devices/{device-id}/getMemberObjects']['response']> {
  return {
    method: 'post',
    path: '/devices/{device-id}/getMemberObjects',
    paramDefs: [{ name: 'device-id', in: 'path' }],
    params,
    body,
  };
}
