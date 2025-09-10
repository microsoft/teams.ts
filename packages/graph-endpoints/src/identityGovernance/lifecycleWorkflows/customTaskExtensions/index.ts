export * as createdBy from './createdBy';
export * as lastModifiedBy from './lastModifiedBy';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}',
    'delete'
  >;
  'GET /identityGovernance/lifecycleWorkflows/customTaskExtensions': Operation<
    '/identityGovernance/lifecycleWorkflows/customTaskExtensions',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}',
    'get'
  >;
  'PATCH /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}',
    'patch'
  >;
  'POST /identityGovernance/lifecycleWorkflows/customTaskExtensions': Operation<
    '/identityGovernance/lifecycleWorkflows/customTaskExtensions',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}`
 *
 * Delete a customTaskExtension object. A custom task extension  can only be deleted if it is not referenced in any task objects in a lifecycle workflow.
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['customTaskExtension-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/customTaskExtensions`
 *
 * Get a list of the customTaskExtension objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/customTaskExtensions']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/customTaskExtensions']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/customTaskExtensions',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}`
 *
 * Read the properties and relationships of a customTaskExtension object.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}',
    paramDefs: {
      path: ['customTaskExtension-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}`
 *
 * Update the properties of a customTaskExtension object.
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension-id}',
    paramDefs: {
      path: ['customTaskExtension-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/lifecycleWorkflows/customTaskExtensions`
 *
 * Create a new customTaskExtension object.
 */
export function create(
  body: IEndpoints['POST /identityGovernance/lifecycleWorkflows/customTaskExtensions']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/lifecycleWorkflows/customTaskExtensions']['response']
> {
  return {
    method: 'post',
    path: '/identityGovernance/lifecycleWorkflows/customTaskExtensions',
    body,
  };
}
