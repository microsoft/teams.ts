import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/informationProtection/signDigest': Operation<
    '/users/{user-id}/informationProtection/signDigest',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/informationProtection/signDigest`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/informationProtection/signDigest']['body'],
  params?: IEndpoints['POST /users/{user-id}/informationProtection/signDigest']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/informationProtection/signDigest']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/informationProtection/signDigest',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
