import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /deviceAppManagement/managedEBooks/{managedEBook-id}/categories': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/categories',
    'get'
  >;
  'GET /deviceAppManagement/managedEBooks/{managedEBook-id}/categories/{managedEBookCategory-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/categories/{managedEBookCategory-id}',
    'get'
  >;
}

/**
 * `GET /deviceAppManagement/managedEBooks/{managedEBook-id}/categories`
 *
 * The list of categories for this eBook.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/categories']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/categories']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/categories',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedEBook-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedEBooks/{managedEBook-id}/categories/{managedEBookCategory-id}`
 *
 * The list of categories for this eBook.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/categories/{managedEBookCategory-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/categories/{managedEBookCategory-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/categories/{managedEBookCategory-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedEBook-id', in: 'path' },
      { name: 'managedEBookCategory-id', in: 'path' },
    ],
    params,
  };
}
