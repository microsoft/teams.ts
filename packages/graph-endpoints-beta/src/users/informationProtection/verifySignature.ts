import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/informationProtection/verifySignature': Operation<
    '/users/{user-id}/informationProtection/verifySignature',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/informationProtection/verifySignature`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/informationProtection/verifySignature']['body'],
  params?: IEndpoints['POST /users/{user-id}/informationProtection/verifySignature']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/informationProtection/verifySignature']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/informationProtection/verifySignature',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
