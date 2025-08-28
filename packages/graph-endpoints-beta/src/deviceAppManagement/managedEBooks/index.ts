export * as assign from './assign';
export * as assignments from './assignments';
export * as categories from './categories';
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
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}']['response']
> {
  return {
    ver: 'beta',
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
 * The Managed eBook.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/managedEBooks']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/managedEBooks']['response']> {
  return {
    ver: 'beta',
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
 * The Managed eBook.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}']['response']
> {
  return {
    ver: 'beta',
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
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}']['response']
> {
  return {
    ver: 'beta',
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
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/managedEBooks']['body'],
  params?: IEndpoints['POST /deviceAppManagement/managedEBooks']['parameters']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/managedEBooks']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/managedEBooks',
    paramDefs: [],
    params,
    body,
  };
}
