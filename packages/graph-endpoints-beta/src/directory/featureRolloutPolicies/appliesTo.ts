import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /directory/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo': Operation<
    '/directory/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo',
    'get'
  >;
  'POST /directory/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo': Operation<
    '/directory/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo',
    'post'
  >;
}

/**
 * `GET /directory/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo`
 *
 * Nullable. Specifies a list of directoryObject resources that feature is enabled for.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /directory/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'featureRolloutPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `POST /directory/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /directory/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo']['body'],
  params?: IEndpoints['POST /directory/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo',
    paramDefs: [{ name: 'featureRolloutPolicy-id', in: 'path' }],
    params,
    body,
  };
}
