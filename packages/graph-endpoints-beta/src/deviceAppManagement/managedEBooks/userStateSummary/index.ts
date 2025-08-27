export * as deviceStates from './deviceStates';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}',
    'delete'
  >;
  'GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary',
    'get'
  >;
  'GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}',
    'patch'
  >;
  'POST /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedEBook-id', in: 'path' },
      { name: 'userInstallStateSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary`
 *
 * The list of installation states for this eBook.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary',
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
 * `GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}`
 *
 * The list of installation states for this eBook.
 */
export function get$1(
  params?: IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedEBook-id', in: 'path' },
      { name: 'userInstallStateSummary-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary/{userInstallStateSummary-id}',
    paramDefs: [
      { name: 'managedEBook-id', in: 'path' },
      { name: 'userInstallStateSummary-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary']['body'],
  params?: IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/userStateSummary',
    paramDefs: [{ name: 'managedEBook-id', in: 'path' }],
    params,
    body,
  };
}
