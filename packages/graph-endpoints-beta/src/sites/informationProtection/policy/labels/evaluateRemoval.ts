import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/informationProtection/policy/labels/evaluateRemoval': Operation<
    '/sites/{site-id}/informationProtection/policy/labels/evaluateRemoval',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/informationProtection/policy/labels/evaluateRemoval`
 *
 * Indicate to the consuming application what actions it should take to remove the label information. Given contentInfo as an input, which includes existing content metadata key/value pairs, the API returns an informationProtectionAction that contains some combination of one of more of the following:
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/informationProtection/policy/labels/evaluateRemoval']['body'],
  params?: IEndpoints['POST /sites/{site-id}/informationProtection/policy/labels/evaluateRemoval']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/informationProtection/policy/labels/evaluateRemoval']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/informationProtection/policy/labels/evaluateRemoval',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
