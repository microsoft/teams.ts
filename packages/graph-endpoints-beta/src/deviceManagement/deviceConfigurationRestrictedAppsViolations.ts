import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}': Operation<
    '/deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceConfigurationRestrictedAppsViolations': Operation<
    '/deviceManagement/deviceConfigurationRestrictedAppsViolations',
    'get'
  >;
  'GET /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}': Operation<
    '/deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}': Operation<
    '/deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceConfigurationRestrictedAppsViolations': Operation<
    '/deviceManagement/deviceConfigurationRestrictedAppsViolations',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'restrictedAppsViolation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceConfigurationRestrictedAppsViolations`
 *
 * Restricted apps violations for this account.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceConfigurationRestrictedAppsViolations']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceConfigurationRestrictedAppsViolations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceConfigurationRestrictedAppsViolations',
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
 * `GET /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}`
 *
 * Restricted apps violations for this account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'restrictedAppsViolation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceConfigurationRestrictedAppsViolations/{restrictedAppsViolation-id}',
    paramDefs: [{ name: 'restrictedAppsViolation-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceConfigurationRestrictedAppsViolations`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceConfigurationRestrictedAppsViolations']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceConfigurationRestrictedAppsViolations']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceConfigurationRestrictedAppsViolations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceConfigurationRestrictedAppsViolations',
    paramDefs: [],
    params,
    body,
  };
}
