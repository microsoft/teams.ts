import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}': Operation<
    '/deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}',
    'delete'
  >;
  'GET /deviceManagement/androidManagedStoreAppConfigurationSchemas': Operation<
    '/deviceManagement/androidManagedStoreAppConfigurationSchemas',
    'get'
  >;
  'GET /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}': Operation<
    '/deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}',
    'get'
  >;
  'PATCH /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}': Operation<
    '/deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}',
    'patch'
  >;
  'POST /deviceManagement/androidManagedStoreAppConfigurationSchemas': Operation<
    '/deviceManagement/androidManagedStoreAppConfigurationSchemas',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'androidManagedStoreAppConfigurationSchema-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/androidManagedStoreAppConfigurationSchemas`
 *
 * Android Enterprise app configuration schema entities.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/androidManagedStoreAppConfigurationSchemas']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/androidManagedStoreAppConfigurationSchemas']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/androidManagedStoreAppConfigurationSchemas',
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
 * `GET /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}`
 *
 * Android Enterprise app configuration schema entities.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'androidManagedStoreAppConfigurationSchema-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}',
    paramDefs: [{ name: 'androidManagedStoreAppConfigurationSchema-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/androidManagedStoreAppConfigurationSchemas`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/androidManagedStoreAppConfigurationSchemas']['body'],
  params?: IEndpoints['POST /deviceManagement/androidManagedStoreAppConfigurationSchemas']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/androidManagedStoreAppConfigurationSchemas']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/androidManagedStoreAppConfigurationSchemas',
    paramDefs: [],
    params,
    body,
  };
}
