export * as setOrder from './setOrder';
export * as userAttribute from './userAttribute';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}',
    'delete'
  >;
  'GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments',
    'get'
  >;
  'GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}',
    'get'
  >;
  'PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}',
    'patch'
  >;
  'POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments',
    'post'
  >;
}

/**
 * `DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}`
 *
 * Delete an identityUserFlowAttributeAssignment object.
 */
export function del(
  params?: IEndpoints['DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'b2xIdentityUserFlow-id', in: 'path' },
      { name: 'identityUserFlowAttributeAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments`
 *
 * Get the identityUserFlowAttributeAssignment resources from the userAttributeAssignments navigation property in a b2xIdentityUserFlow.
 */
export function list(
  params?: IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments']['response']
> {
  return {
    method: 'get',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'b2xIdentityUserFlow-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}`
 *
 * Read the properties and relationships of an identityUserFlowAttributeAssignment object.
 */
export function get(
  params?: IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}']['response']
> {
  return {
    method: 'get',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'b2xIdentityUserFlow-id', in: 'path' },
      { name: 'identityUserFlowAttributeAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}`
 *
 * Update the properties of a identityUserFlowAttributeAssignment object.
 */
export function update(
  body: IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}']['body'],
  params?: IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/{identityUserFlowAttributeAssignment-id}',
    paramDefs: [
      { name: 'b2xIdentityUserFlow-id', in: 'path' },
      { name: 'identityUserFlowAttributeAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments`
 *
 * Create a new identityUserFlowAttributeAssignment object in a b2xIdentityUserFlow.
 */
export function create(
  body: IEndpoints['POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments']['body'],
  params?: IEndpoints['POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments']['response']
> {
  return {
    method: 'post',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments',
    paramDefs: [{ name: 'b2xIdentityUserFlow-id', in: 'path' }],
    params,
    body,
  };
}
