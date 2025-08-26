import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo': Operation<
    '/policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo',
    'get'
  >;
  'POST /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo': Operation<
    '/policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo',
    'post'
  >;
}

/**
 * `GET /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo`
 *
 * Nullable. Specifies a list of directoryObject resources that feature is enabled for.
 */
export function get(
  params?: IEndpoints['GET /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo']['response']
> {
  return {
    method: 'get',
    path: '/policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo',
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
 * `POST /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo`
 *
 * Add an appliesTo on a featureRolloutPolicy object to specify the directoryObject to which the featureRolloutPolicy should be applied.
 */
export function create(
  body: IEndpoints['POST /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo']['body'],
  params?: IEndpoints['POST /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo']['parameters']
): EndpointRequest<
  IEndpoints['POST /policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo']['response']
> {
  return {
    method: 'post',
    path: '/policies/featureRolloutPolicies/{featureRolloutPolicy-id}/appliesTo',
    paramDefs: [{ name: 'featureRolloutPolicy-id', in: 'path' }],
    params,
    body,
  };
}
