export * as roleAssignmentRequests from './roleAssignmentRequests';
export * as roleAssignments from './roleAssignments';
export * as roleDefinitions from './roleDefinitions';
export * as roleSettings from './roleSettings';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}',
    'delete'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/resources': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources',
    'get'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}',
    'get'
  >;
  'PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}',
    'patch'
  >;
  'POST /privilegedAccess/{privilegedAccess-id}/resources': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources',
    'post'
  >;
  'GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/parent': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/parent',
    'get'
  >;
  'POST /privilegedAccess/{privilegedAccess-id}/resources/register': Operation<
    '/privilegedAccess/{privilegedAccess-id}/resources/register',
    'post'
  >;
}

/**
 * `DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['privilegedAccess-id', 'governanceResource-id'],
    },
    params,
  };
}

/**
 * `GET /privilegedAccess/{privilegedAccess-id}/resources`
 *
 * A collection of resources for the provider.
 */
export function list(
  params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedAccess/{privilegedAccess-id}/resources',
    paramDefs: {
      path: ['privilegedAccess-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}`
 *
 * A collection of resources for the provider.
 */
export function get(
  params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}',
    paramDefs: {
      path: ['privilegedAccess-id', 'governanceResource-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}']['body'],
  params?: IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}',
    paramDefs: {
      path: ['privilegedAccess-id', 'governanceResource-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /privilegedAccess/{privilegedAccess-id}/resources`
 *
 */
export function create(
  body: IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/resources']['body'],
  params?: IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/resources']['parameters']
): EndpointRequest<
  IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/resources']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/privilegedAccess/{privilegedAccess-id}/resources',
    paramDefs: {
      path: ['privilegedAccess-id'],
    },
    params,
    body,
  };
}

export const parent = {
  /**
   * `GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/parent`
   *
   * Read-only. The parent resource. for pimforazurerbac scenario, it can represent the subscription the resource belongs to.
   */
  get: function get(
    params?: IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/parent']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/parent']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/privilegedAccess/{privilegedAccess-id}/resources/{governanceResource-id}/parent',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['privilegedAccess-id', 'governanceResource-id'],
      },
      params,
    };
  },
};

export const register = {
  /**
   * `POST /privilegedAccess/{privilegedAccess-id}/resources/register`
   *
   */
  create: function create(
    body: IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/resources/register']['body'],
    params?: IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/resources/register']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /privilegedAccess/{privilegedAccess-id}/resources/register']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/privilegedAccess/{privilegedAccess-id}/resources/register',
      paramDefs: {
        path: ['privilegedAccess-id'],
      },
      params,
      body,
    };
  },
};
