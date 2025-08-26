import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments',
    'get'
  >;
  'GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments': Operation<
    '/deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}`
 *
 * Deletes a termsAndConditionsAssignment.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'termsAndConditions-id', in: 'path' },
      { name: 'termsAndConditionsAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments`
 *
 * List properties and relationships of the termsAndConditionsAssignment objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'termsAndConditions-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}`
 *
 * Read properties and relationships of the termsAndConditionsAssignment object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'termsAndConditions-id', in: 'path' },
      { name: 'termsAndConditionsAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}`
 *
 * Update the properties of a termsAndConditionsAssignment object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments/{termsAndConditionsAssignment-id}',
    paramDefs: [
      { name: 'termsAndConditions-id', in: 'path' },
      { name: 'termsAndConditionsAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments`
 *
 * Create a new termsAndConditionsAssignment object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/termsAndConditions/{termsAndConditions-id}/assignments',
    paramDefs: [{ name: 'termsAndConditions-id', in: 'path' }],
    params,
    body,
  };
}
