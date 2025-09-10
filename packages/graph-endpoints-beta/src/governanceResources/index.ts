export * as roleAssignmentRequests from './roleAssignmentRequests';
export * as roleAssignments from './roleAssignments';
export * as roleDefinitions from './roleDefinitions';
export * as roleSettings from './roleSettings';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /governanceResources/{governanceResource-id}': Operation<
    '/governanceResources/{governanceResource-id}',
    'delete'
  >;
  'GET /governanceResources': Operation<'/governanceResources', 'get'>;
  'GET /governanceResources/{governanceResource-id}': Operation<
    '/governanceResources/{governanceResource-id}',
    'get'
  >;
  'PATCH /governanceResources/{governanceResource-id}': Operation<
    '/governanceResources/{governanceResource-id}',
    'patch'
  >;
  'POST /governanceResources': Operation<'/governanceResources', 'post'>;
  'GET /governanceResources/{governanceResource-id}/parent': Operation<
    '/governanceResources/{governanceResource-id}/parent',
    'get'
  >;
  'POST /governanceResources/register': Operation<'/governanceResources/register', 'post'>;
}

/**
 * `DELETE /governanceResources/{governanceResource-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /governanceResources/{governanceResource-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /governanceResources/{governanceResource-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/governanceResources/{governanceResource-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['governanceResource-id'],
    },
    params,
  };
}

/**
 * `GET /governanceResources`
 *
 */
export function list(
  params?: IEndpoints['GET /governanceResources']['parameters']
): EndpointRequest<IEndpoints['GET /governanceResources']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceResources',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /governanceResources/{governanceResource-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /governanceResources/{governanceResource-id}']['parameters']
): EndpointRequest<IEndpoints['GET /governanceResources/{governanceResource-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/governanceResources/{governanceResource-id}',
    paramDefs: {
      path: ['governanceResource-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /governanceResources/{governanceResource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /governanceResources/{governanceResource-id}']['body'],
  params?: IEndpoints['PATCH /governanceResources/{governanceResource-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /governanceResources/{governanceResource-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/governanceResources/{governanceResource-id}',
    paramDefs: {
      path: ['governanceResource-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /governanceResources`
 *
 */
export function create(
  body: IEndpoints['POST /governanceResources']['body']
): EndpointRequest<IEndpoints['POST /governanceResources']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/governanceResources',
    body,
  };
}

export const parent = {
  /**
   * `GET /governanceResources/{governanceResource-id}/parent`
   *
   * Read-only. The parent resource. for pimforazurerbac scenario, it can represent the subscription the resource belongs to.
   */
  get: function get(
    params?: IEndpoints['GET /governanceResources/{governanceResource-id}/parent']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /governanceResources/{governanceResource-id}/parent']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/governanceResources/{governanceResource-id}/parent',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['governanceResource-id'],
      },
      params,
    };
  },
};

export const register = {
  /**
   * `POST /governanceResources/register`
   *
   */
  create: function create(
    body: IEndpoints['POST /governanceResources/register']['body']
  ): EndpointRequest<IEndpoints['POST /governanceResources/register']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/governanceResources/register',
      body,
    };
  },
};
