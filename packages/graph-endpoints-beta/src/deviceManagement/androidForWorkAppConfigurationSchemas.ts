import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}': Operation<
    '/deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}',
    'delete'
  >;
  'GET /deviceManagement/androidForWorkAppConfigurationSchemas': Operation<
    '/deviceManagement/androidForWorkAppConfigurationSchemas',
    'get'
  >;
  'GET /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}': Operation<
    '/deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}',
    'get'
  >;
  'PATCH /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}': Operation<
    '/deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}',
    'patch'
  >;
  'POST /deviceManagement/androidForWorkAppConfigurationSchemas': Operation<
    '/deviceManagement/androidForWorkAppConfigurationSchemas',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'androidForWorkAppConfigurationSchema-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/androidForWorkAppConfigurationSchemas`
 *
 * Android for Work app configuration schema entities.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/androidForWorkAppConfigurationSchemas']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/androidForWorkAppConfigurationSchemas']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/androidForWorkAppConfigurationSchemas',
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
 * `GET /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}`
 *
 * Android for Work app configuration schema entities.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'androidForWorkAppConfigurationSchema-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}',
    paramDefs: [{ name: 'androidForWorkAppConfigurationSchema-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/androidForWorkAppConfigurationSchemas`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/androidForWorkAppConfigurationSchemas']['body'],
  params?: IEndpoints['POST /deviceManagement/androidForWorkAppConfigurationSchemas']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/androidForWorkAppConfigurationSchemas']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/androidForWorkAppConfigurationSchemas',
    paramDefs: [],
    params,
    body,
  };
}
