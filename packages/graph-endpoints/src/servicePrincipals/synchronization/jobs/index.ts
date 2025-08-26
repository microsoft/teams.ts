export * as bulkUpload from './bulkUpload';
export * as pause from './pause';
export * as provisionOnDemand from './provisionOnDemand';
export * as restart from './restart';
export * as schema from './schema';
export * as start from './start';
export * as validateCredentials from './validateCredentials';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}',
    'delete'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}',
    'patch'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs',
    'post'
  >;
}

/**
 * `DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}`
 *
 * Stop the synchronization job, and permanently delete all the state associated with it. Synchronized accounts are left as-is.
 */
export function del(
  params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}']['response']
> {
  return {
    method: 'delete',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'synchronizationJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs`
 *
 * List existing jobs for a given application instance (service principal).
 */
export function list(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs']['response']
> {
  return {
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}`
 *
 * Retrieve the existing synchronization job and its properties.
 */
export function get(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}']['response']
> {
  return {
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'synchronizationJob-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}']['body'],
  params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}']['response']
> {
  return {
    method: 'patch',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs/{synchronizationJob-id}',
    paramDefs: [
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'synchronizationJob-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs`
 *
 * Create new synchronization job with a default synchronization schema. The job is created in a disabled state. Call Start job to start synchronization.
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/jobs']['response']
> {
  return {
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/jobs',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
