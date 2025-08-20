import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /directoryObjects/{directoryObject-id}/getMemberObjects': Operation<
    '/directoryObjects/{directoryObject-id}/getMemberObjects',
    'post'
  >;
}

/**
  * `POST /directoryObjects/{directoryObject-id}/getMemberObjects`
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
  body: IEndpoints['POST /directoryObjects/{directoryObject-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /directoryObjects/{directoryObject-id}/getMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /directoryObjects/{directoryObject-id}/getMemberObjects']['response']
> {
  return {
    method: 'post',
    path: '/directoryObjects/{directoryObject-id}/getMemberObjects',
    paramDefs: [{ name: 'directoryObject-id', in: 'path' }],
    params,
    body,
  };
}
