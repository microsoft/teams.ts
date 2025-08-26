import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /contacts/{orgContact-id}/getMemberObjects': Operation<
    '/contacts/{orgContact-id}/getMemberObjects',
    'post'
  >;
}

/**
  * `POST /contacts/{orgContact-id}/getMemberObjects`
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
  body: IEndpoints['POST /contacts/{orgContact-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /contacts/{orgContact-id}/getMemberObjects']['parameters']
): EndpointRequest<IEndpoints['POST /contacts/{orgContact-id}/getMemberObjects']['response']> {
  return {
    method: 'post',
    path: '/contacts/{orgContact-id}/getMemberObjects',
    paramDefs: [{ name: 'orgContact-id', in: 'path' }],
    params,
    body,
  };
}
