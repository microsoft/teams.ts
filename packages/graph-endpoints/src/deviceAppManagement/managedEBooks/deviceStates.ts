import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}',
    'delete'
  >;
  'GET /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates',
    'get'
  >;
  'GET /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}',
    'patch'
  >;
  'POST /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates': Operation<
    '/deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}`
 *
 * Deletes a deviceInstallState.
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedEBook-id', in: 'path' },
      { name: 'deviceInstallState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates`
 *
 * List properties and relationships of the deviceInstallState objects.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates',
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
 * `GET /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}`
 *
 * Read properties and relationships of the deviceInstallState object.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedEBook-id', in: 'path' },
      { name: 'deviceInstallState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}`
 *
 * Update the properties of a deviceInstallState object.
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates/{deviceInstallState-id}',
    paramDefs: [
      { name: 'managedEBook-id', in: 'path' },
      { name: 'deviceInstallState-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates`
 *
 * Create a new deviceInstallState object.
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates']['body'],
  params?: IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates']['response']
> {
  return {
    method: 'post',
    path: '/deviceAppManagement/managedEBooks/{managedEBook-id}/deviceStates',
    paramDefs: [{ name: 'managedEBook-id', in: 'path' }],
    params,
    body,
  };
}
