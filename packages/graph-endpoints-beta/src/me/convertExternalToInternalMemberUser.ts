import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /me/convertExternalToInternalMemberUser': Operation<
    '/me/convertExternalToInternalMemberUser',
    'post'
  >;
}

/**
 * `POST /me/convertExternalToInternalMemberUser`
 *
 * Convert an externally authenticated user into an internal user. The user is able to sign into the host tenant as an internal user and access resources as a member. For more information about this conversion, see Convert external users to internal users.
 */
export function create(
  body: IEndpoints['POST /me/convertExternalToInternalMemberUser']['body'],
  params?: IEndpoints['POST /me/convertExternalToInternalMemberUser']['parameters']
): EndpointRequest<IEndpoints['POST /me/convertExternalToInternalMemberUser']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/convertExternalToInternalMemberUser',
    paramDefs: [],
    params,
    body,
  };
}
