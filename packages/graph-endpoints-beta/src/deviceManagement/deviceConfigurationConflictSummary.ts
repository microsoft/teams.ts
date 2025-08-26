import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}': Operation<
    '/deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceConfigurationConflictSummary': Operation<
    '/deviceManagement/deviceConfigurationConflictSummary',
    'get'
  >;
  'GET /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}': Operation<
    '/deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}': Operation<
    '/deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceConfigurationConflictSummary': Operation<
    '/deviceManagement/deviceConfigurationConflictSummary',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceConfigurationConflictSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceConfigurationConflictSummary`
 *
 * Summary of policies in conflict state for this account.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceConfigurationConflictSummary']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceConfigurationConflictSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceConfigurationConflictSummary',
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
 * `GET /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}`
 *
 * Summary of policies in conflict state for this account.
 */
export function get$1(
  params?: IEndpoints['GET /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceConfigurationConflictSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceConfigurationConflictSummary/{deviceConfigurationConflictSummary-id}',
    paramDefs: [{ name: 'deviceConfigurationConflictSummary-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceConfigurationConflictSummary`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceConfigurationConflictSummary']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceConfigurationConflictSummary']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceConfigurationConflictSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceConfigurationConflictSummary',
    paramDefs: [],
    params,
    body,
  };
}
