import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance': Operation<
    '/users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance`
 *
 * Computes the rights and inheritance for sensitivity labels based on the input content and labels.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance']['body'],
  params?: IEndpoints['POST /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/computeRightsAndInheritance',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'sensitivityLabel-id', in: 'path' },
    ],
    params,
    body,
  };
}
