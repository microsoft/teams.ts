import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}',
    'delete'
  >;
  'GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests',
    'get'
  >;
  'GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}',
    'patch'
  >;
  'POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests': Operation<
    '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedAppRegistration-id', in: 'path' },
      { name: 'managedAppLogCollectionRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests`
 *
 * Zero or more log collection requests triggered for the app.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedAppRegistration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}`
 *
 * Zero or more log collection requests triggered for the app.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedAppRegistration-id', in: 'path' },
      { name: 'managedAppLogCollectionRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests/{managedAppLogCollectionRequest-id}',
    paramDefs: [
      { name: 'managedAppRegistration-id', in: 'path' },
      { name: 'managedAppLogCollectionRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests']['body'],
  params?: IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}/managedAppLogCollectionRequests',
    paramDefs: [{ name: 'managedAppRegistration-id', in: 'path' }],
    params,
    body,
  };
}
