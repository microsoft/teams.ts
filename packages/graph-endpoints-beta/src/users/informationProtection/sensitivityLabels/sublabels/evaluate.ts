import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate': Operation<
    '/users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate']['body'],
  params?: IEndpoints['POST /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/evaluate',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
    body,
  };
}
