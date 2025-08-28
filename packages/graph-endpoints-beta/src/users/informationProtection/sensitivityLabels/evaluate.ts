import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/informationProtection/sensitivityLabels/evaluate': Operation<
    '/users/{user-id}/informationProtection/sensitivityLabels/evaluate',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/informationProtection/sensitivityLabels/evaluate`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/informationProtection/sensitivityLabels/evaluate']['body'],
  params?: IEndpoints['POST /users/{user-id}/informationProtection/sensitivityLabels/evaluate']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/informationProtection/sensitivityLabels/evaluate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/informationProtection/sensitivityLabels/evaluate',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
