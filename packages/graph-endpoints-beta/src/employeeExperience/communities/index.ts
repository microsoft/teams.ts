export * as group from './group';
export * as owners from './owners';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /employeeExperience/communities/{community-id}': Operation<
    '/employeeExperience/communities/{community-id}',
    'delete'
  >;
  'GET /employeeExperience/communities': Operation<'/employeeExperience/communities', 'get'>;
  'GET /employeeExperience/communities/{community-id}': Operation<
    '/employeeExperience/communities/{community-id}',
    'get'
  >;
  'PATCH /employeeExperience/communities/{community-id}': Operation<
    '/employeeExperience/communities/{community-id}',
    'patch'
  >;
  'POST /employeeExperience/communities': Operation<'/employeeExperience/communities', 'post'>;
}

/**
 * `DELETE /employeeExperience/communities/{community-id}`
 *
 * Delete a Viva Engage community along with all associated Microsoft 365 content, including the connected Microsoft 365 group, OneNote notebook, and Planner plans. For more information, see What happens if I delete a Viva Engage community connected to Microsoft 365 groups.
 */
export function del(
  params?: IEndpoints['DELETE /employeeExperience/communities/{community-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /employeeExperience/communities/{community-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/employeeExperience/communities/{community-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['community-id'],
    },
    params,
  };
}

/**
 * `GET /employeeExperience/communities`
 *
 * Get a list of the Viva Engage community objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /employeeExperience/communities']['parameters']
): EndpointRequest<IEndpoints['GET /employeeExperience/communities']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience/communities',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /employeeExperience/communities/{community-id}`
 *
 * Read the properties and relationships of a community object.
 */
export function get(
  params?: IEndpoints['GET /employeeExperience/communities/{community-id}']['parameters']
): EndpointRequest<IEndpoints['GET /employeeExperience/communities/{community-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/employeeExperience/communities/{community-id}',
    paramDefs: {
      path: ['community-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /employeeExperience/communities/{community-id}`
 *
 * Update the properties of an existing Viva Engage community.
 */
export function update(
  body: IEndpoints['PATCH /employeeExperience/communities/{community-id}']['body'],
  params?: IEndpoints['PATCH /employeeExperience/communities/{community-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /employeeExperience/communities/{community-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/employeeExperience/communities/{community-id}',
    paramDefs: {
      path: ['community-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /employeeExperience/communities`
 *
 * Create a new community in Viva Engage.
 */
export function create(
  body: IEndpoints['POST /employeeExperience/communities']['body']
): EndpointRequest<IEndpoints['POST /employeeExperience/communities']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/employeeExperience/communities',
    body,
  };
}
