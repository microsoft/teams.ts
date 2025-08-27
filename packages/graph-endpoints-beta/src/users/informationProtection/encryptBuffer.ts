import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/informationProtection/encryptBuffer': Operation<
    '/users/{user-id}/informationProtection/encryptBuffer',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/informationProtection/encryptBuffer`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/informationProtection/encryptBuffer']['body'],
  params?: IEndpoints['POST /users/{user-id}/informationProtection/encryptBuffer']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/informationProtection/encryptBuffer']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/informationProtection/encryptBuffer',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
