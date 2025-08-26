import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance': Operation<
    '/sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance`
 *
 * Computes the rights and inheritance for sensitivity labels based on the input content and labels.
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance']['body'],
  params?: IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/informationProtection/sensitivityLabels/computeRightsAndInheritance',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
