import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /applications/{application-id}/getMemberObjects': Operation<
    '/applications/{application-id}/getMemberObjects',
    'post'
  >;
}

/**
  * `POST /applications/{application-id}/getMemberObjects`
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
  body: IEndpoints['POST /applications/{application-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /applications/{application-id}/getMemberObjects']['parameters']
): EndpointRequest<IEndpoints['POST /applications/{application-id}/getMemberObjects']['response']> {
  return {
    method: 'post',
    path: '/applications/{application-id}/getMemberObjects',
    paramDefs: [{ name: 'application-id', in: 'path' }],
    params,
    body,
  };
}
