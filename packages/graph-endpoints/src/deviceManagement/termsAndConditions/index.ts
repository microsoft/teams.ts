export * as acceptanceStatuses from './acceptanceStatuses';
export * as assignments from './assignments';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}',
    'delete'
  >;
  'GET /deviceManagement/termsAndConditions': Operation<
    '/deviceManagement/termsAndConditions',
    'get'
  >;
  'GET /deviceManagement/termsAndConditions/{termsAndConditions-id}': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}',
    'get'
  >;
  'PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}',
    'patch'
  >;
  'POST /deviceManagement/termsAndConditions': Operation<
    '/deviceManagement/termsAndConditions',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}`
 *
 * Deletes a termsAndConditions.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'termsAndConditions-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/termsAndConditions`
 *
 * List properties and relationships of the termsAndConditions objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/termsAndConditions']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/termsAndConditions']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/termsAndConditions',
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
 * `GET /deviceManagement/termsAndConditions/{termsAndConditions-id}`
 *
 * Read properties and relationships of the termsAndConditions object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'termsAndConditions-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}`
 *
 * Update the properties of a termsAndConditions object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}',
    paramDefs: [{ name: 'termsAndConditions-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/termsAndConditions`
 *
 * Create a new termsAndConditions object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/termsAndConditions']['body'],
  params?: IEndpoints['POST /deviceManagement/termsAndConditions']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/termsAndConditions']['response']> {
  return {
    method: 'post',
    path: '/deviceManagement/termsAndConditions',
    paramDefs: [],
    params,
    body,
  };
}
