import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/convertExternalToInternalMemberUser': Operation<
    '/users/{user-id}/convertExternalToInternalMemberUser',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/convertExternalToInternalMemberUser`
 *
 * Convert an externally authenticated user into an internal user. The user is able to sign into the host tenant as an internal user and access resources as a member. For more information about this conversion, see Convert external users to internal users.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/convertExternalToInternalMemberUser']['body'],
  params?: IEndpoints['POST /users/{user-id}/convertExternalToInternalMemberUser']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/convertExternalToInternalMemberUser']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/convertExternalToInternalMemberUser',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
