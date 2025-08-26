import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance`
 *
 * Computes the rights and inheritance for sensitivity labels based on the input content and labels.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
