export * as assign from './assign';
export * as assignments from './assignments';
export * as deviceStates from './deviceStates';
export * as installSummary from './installSummary';
export * as userStateSummary from './userStateSummary';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}',
    'delete'
  >;
  'GET /deviceAppManagement/managedEBooks': Operation<'/deviceAppManagement/managedEBooks', 'get'>;
  'GET /deviceAppManagement/managedEBooks/{managedEBook-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}',
    'patch'
  >;
  'POST /deviceAppManagement/managedEBooks': Operation<
    '/deviceAppManagement/managedEBooks',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}`
 *
 * Deletes a iosVppEBook.
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedEBook-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedEBooks`
 *
 * List properties and relationships of the iosVppEBook objects.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/managedEBooks']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/managedEBooks']['response']> {
  return {
    method: 'get',
    path: '/deviceAppManagement/managedEBooks',
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
 * `GET /deviceAppManagement/managedEBooks/{managedEBook-id}`
 *
 * Read properties and relationships of the iosVppEBook object.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedEBook-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}`
 *
 * Update the properties of a iosVppEBook object.
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}',
    paramDefs: [{ name: 'managedEBook-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/managedEBooks`
 *
 * Create a new iosVppEBook object.
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/managedEBooks']['body'],
  params?: IEndpoints['POST /deviceAppManagement/managedEBooks']['parameters']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/managedEBooks']['response']> {
  return {
    method: 'post',
    path: '/deviceAppManagement/managedEBooks',
    paramDefs: [],
    params,
    body,
  };
}
