import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceCategories/{deviceCategory-id}': Operation<
    '/deviceManagement/deviceCategories/{deviceCategory-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceCategories': Operation<'/deviceManagement/deviceCategories', 'get'>;
  'GET /deviceManagement/deviceCategories/{deviceCategory-id}': Operation<
    '/deviceManagement/deviceCategories/{deviceCategory-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceCategories/{deviceCategory-id}': Operation<
    '/deviceManagement/deviceCategories/{deviceCategory-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceCategories': Operation<
    '/deviceManagement/deviceCategories',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceCategories/{deviceCategory-id}`
 *
 * Deletes a deviceCategory.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceCategories/{deviceCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceCategories/{deviceCategory-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/deviceCategories/{deviceCategory-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCategories`
 *
 * List properties and relationships of the deviceCategory objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceCategories']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/deviceCategories']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceCategories',
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
 * `GET /deviceManagement/deviceCategories/{deviceCategory-id}`
 *
 * Read properties and relationships of the deviceCategory object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceCategories/{deviceCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCategories/{deviceCategory-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceCategories/{deviceCategory-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceCategories/{deviceCategory-id}`
 *
 * Update the properties of a deviceCategory object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceCategories/{deviceCategory-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceCategories/{deviceCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceCategories/{deviceCategory-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/deviceCategories/{deviceCategory-id}',
    paramDefs: [{ name: 'deviceCategory-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceCategories`
 *
 * Create a new deviceCategory object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceCategories']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceCategories']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/deviceCategories']['response']> {
  return {
    method: 'post',
    path: '/deviceManagement/deviceCategories',
    paramDefs: [],
    params,
    body,
  };
}
