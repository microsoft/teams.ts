import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}',
    'delete'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications': Operation<
    '/servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}',
    'patch'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications': Operation<
    '/servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications',
    'post'
  >;
}

/**
 * `DELETE /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}`
 *
 * Deletes a delegatedPermissionClassification which had previously been set for a delegated permission.
 */
export function del(
  params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}']['response']
> {
  return {
    method: 'delete',
    path: '/servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'delegatedPermissionClassification-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications`
 *
 * Retrieve the list of delegatedPermissionClassification currently configured for the delegated permissions exposed by an API.
 */
export function list(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications']['response']
> {
  return {
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}']['response']
> {
  return {
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'delegatedPermissionClassification-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}']['body'],
  params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}']['response']
> {
  return {
    method: 'patch',
    path: '/servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications/{delegatedPermissionClassification-id}',
    paramDefs: [
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'delegatedPermissionClassification-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications`
 *
 * Classify a delegated permission by adding a delegatedPermissionClassification to the servicePrincipal representing the API.
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications']['response']
> {
  return {
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/delegatedPermissionClassifications',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
