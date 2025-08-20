import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/informationProtection/policy/labels/evaluateApplication': Operation<
    '/users/{user-id}/informationProtection/policy/labels/evaluateApplication',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/informationProtection/policy/labels/evaluateApplication`
 *
 * Compute the information protection label that should be applied and return the set of actions that must be taken to correctly label the information. This API is useful when a label should be set manually or explicitly by a user or service, rather than automatically based on file contents.  Given contentInfo, which includes existing content metadata key/value pairs, and labelingOptions as an input, the API returns an informationProtectionAction object that contains one of more of the following:
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/informationProtection/policy/labels/evaluateApplication']['body'],
  params?: IEndpoints['POST /users/{user-id}/informationProtection/policy/labels/evaluateApplication']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/informationProtection/policy/labels/evaluateApplication']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/informationProtection/policy/labels/evaluateApplication',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
