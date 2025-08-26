import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/informationProtection/decryptBuffer': Operation<
    '/users/{user-id}/informationProtection/decryptBuffer',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/informationProtection/decryptBuffer`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/informationProtection/decryptBuffer']['body'],
  params?: IEndpoints['POST /users/{user-id}/informationProtection/decryptBuffer']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/informationProtection/decryptBuffer']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/informationProtection/decryptBuffer',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
