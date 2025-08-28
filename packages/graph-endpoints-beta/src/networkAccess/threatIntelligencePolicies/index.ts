export * as policyRules from './policyRules';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}': Operation<
    '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}',
    'delete'
  >;
  'GET /networkAccess/threatIntelligencePolicies': Operation<
    '/networkAccess/threatIntelligencePolicies',
    'get'
  >;
  'GET /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}': Operation<
    '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}',
    'get'
  >;
  'PATCH /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}': Operation<
    '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}',
    'patch'
  >;
  'POST /networkAccess/threatIntelligencePolicies': Operation<
    '/networkAccess/threatIntelligencePolicies',
    'post'
  >;
}

/**
 * `DELETE /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}`
 *
 * Delete a threatIntelligencePolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'threatIntelligencePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/threatIntelligencePolicies`
 *
 * Get a list of the threatIntelligencePolicy objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/threatIntelligencePolicies']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/threatIntelligencePolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/threatIntelligencePolicies',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}`
 *
 * Read the properties and relationships of a threatIntelligencePolicy object.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'threatIntelligencePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}`
 *
 * Update the properties of a threatIntelligencePolicy object.
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/threatIntelligencePolicies/{threatIntelligencePolicy-id}',
    paramDefs: [{ name: 'threatIntelligencePolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /networkAccess/threatIntelligencePolicies`
 *
 * Create a new threatIntelligencePolicy object.
 */
export function create(
  body: IEndpoints['POST /networkAccess/threatIntelligencePolicies']['body'],
  params?: IEndpoints['POST /networkAccess/threatIntelligencePolicies']['parameters']
): EndpointRequest<IEndpoints['POST /networkAccess/threatIntelligencePolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/threatIntelligencePolicies',
    paramDefs: [],
    params,
    body,
  };
}
