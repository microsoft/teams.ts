import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}',
    'delete'
  >;
  'GET /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/assignments',
    'get'
  >;
  'GET /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}',
    'patch'
  >;
  'POST /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedEBook-id', in: 'path' },
      { name: 'managedEBookAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments`
 *
 * The list of assignments for this eBook.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/assignments',
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
 * `GET /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}`
 *
 * The list of assignments for this eBook.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedEBook-id', in: 'path' },
      { name: 'managedEBookAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/assignments/{managedEBookAssignment-id}',
    paramDefs: [
      { name: 'managedEBook-id', in: 'path' },
      { name: 'managedEBookAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/assignments',
    paramDefs: [{ name: 'managedEBook-id', in: 'path' }],
    params,
    body,
  };
}
