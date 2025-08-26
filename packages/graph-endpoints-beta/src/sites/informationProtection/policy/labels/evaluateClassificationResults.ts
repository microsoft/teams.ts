import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /sites/{site-id}/informationProtection/policy/labels/evaluateClassificationResults': Operation<
    '/sites/{site-id}/informationProtection/policy/labels/evaluateClassificationResults',
    'post'
  >;
}

/**
 * `POST /sites/{site-id}/informationProtection/policy/labels/evaluateClassificationResults`
 *
 * Using classification results, compute the information protection label that should be applied and return the set of actions that must be taken to correctly label the information. This API is useful when a label should be set automatically based on classification of the file contents, rather than labeled directly by a user or service. To evaluate based on classification results, provide contentInfo, which includes existing content metadata key/value pairs, and classification results. The API returns an informationProtectionAction that contains one of more of the following:
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/informationProtection/policy/labels/evaluateClassificationResults']['body'],
  params?: IEndpoints['POST /sites/{site-id}/informationProtection/policy/labels/evaluateClassificationResults']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/informationProtection/policy/labels/evaluateClassificationResults']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/informationProtection/policy/labels/evaluateClassificationResults',
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
