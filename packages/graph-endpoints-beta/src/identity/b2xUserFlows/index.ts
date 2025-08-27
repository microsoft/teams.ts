export * as apiConnectorConfiguration from './apiConnectorConfiguration';
export * as identityProviders from './identityProviders';
export * as languages from './languages';
export * as userAttributeAssignments from './userAttributeAssignments';
export * as userFlowIdentityProviders from './userFlowIdentityProviders';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}',
    'delete'
  >;
  'GET /identity/b2xUserFlows': Operation<'/identity/b2xUserFlows', 'get'>;
  'GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}',
    'get'
  >;
  'PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}',
    'patch'
  >;
  'POST /identity/b2xUserFlows': Operation<'/identity/b2xUserFlows', 'post'>;
}

/**
 * `DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}`
 *
 * Delete a b2xIdentityUserFlow object.
 */
export function del(
  params?: IEndpoints['DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'b2xIdentityUserFlow-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/b2xUserFlows`
 *
 * Retrieve a list of b2xIdentityUserFlow objects.
 */
export function list(
  params?: IEndpoints['GET /identity/b2xUserFlows']['parameters']
): EndpointRequest<IEndpoints['GET /identity/b2xUserFlows']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/b2xUserFlows',
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
 * `GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}`
 *
 * Retrieve the properties and relationships of a b2xIdentityUserFlow object.
 */
export function get(
  params?: IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}']['parameters']
): EndpointRequest<IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'b2xIdentityUserFlow-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}']['body'],
  params?: IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}',
    paramDefs: [{ name: 'b2xIdentityUserFlow-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /identity/b2xUserFlows`
 *
 * Create a new b2xIdentityUserFlow object.
 */
export function create(
  body: IEndpoints['POST /identity/b2xUserFlows']['body'],
  params?: IEndpoints['POST /identity/b2xUserFlows']['parameters']
): EndpointRequest<IEndpoints['POST /identity/b2xUserFlows']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identity/b2xUserFlows',
    paramDefs: [],
    params,
    body,
  };
}
